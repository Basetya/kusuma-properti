#!/usr/bin/env pwsh
param (
    [switch]$Once = $false
)

$ErrorActionPreference = "Stop"
$maxIterations = 10
$iteration = 0
$failCount = 0
$failThreshold = 3

Write-Host "=== Memulai Ralph Loop Execution (PowerShell Mode 3) ===" -ForegroundColor Cyan
if ($Once) {
    Write-Host "[MODE] Single-pass execution enabled (-Once)." -ForegroundColor DarkCyan
}

while ($iteration -lt $maxIterations) {
    if (-not (Test-Path "docs/TASKS.md")) {
        Write-Host "docs/TASKS.md tidak ditemukan!" -ForegroundColor Red
        exit 1
    }

    $pendingTasks = Select-String -Path "docs/TASKS.md" -Pattern "- \[ \]"
    if (-not $pendingTasks) {
        Write-Host "=== Semua tugas di docs/TASKS.md selesai! Loop berakhir sukses. ===" -ForegroundColor Green
        exit 0
    }

    if (Test-Path "BLOCKED.md") {
        Write-Host "=== CIRCUIT BREAKER AKTIF: Ditemukan BLOCKED.md. ===" -ForegroundColor Red
        exit 1
    }

    $iteration++
    Write-Host "--- Menjalankan Iterasi Ralph #$iteration ---" -ForegroundColor Yellow

    try {
        if (Test-Path "apps/web") {
            Push-Location "apps/web"
            npm run build
            $ec = $LASTEXITCODE
            Pop-Location
        } else {
            npm run build
            $ec = $LASTEXITCODE
        }
        if ($ec -ne 0) {
            throw "npm run build failed with exit code $ec"
        }
        Write-Host "Build gatekeeper lolos pada iterasi #$iteration" -ForegroundColor Green
        $failCount = 0

        if ($Once) {
            Write-Host "=== Single-pass run (-Once) sukses selesai pada iterasi #$iteration! ===" -ForegroundColor Green
            exit 0
        }
    }
    catch {
        Pop-Location -ErrorAction SilentlyContinue
        $failCount++
        Write-Host "Build gagal pada iterasi #$iteration (failure $failCount)" -ForegroundColor Red
        if ($failCount -ge $failThreshold) {
            $msg = "Build failed $failCount times consecutively. Root cause: $($_.Exception.Message)"
            Set-Content -Path "BLOCKED.md" -Value $msg
            Write-Host "=== CIRCUIT BREAKER TRIGGERED: BLOCKED.md written ===" -ForegroundColor Red
            exit 1
        }
    }

    Start-Sleep -Seconds 2
}

Write-Host "Mencapai batas maksimal iterasi ($maxIterations)." -ForegroundColor Yellow
