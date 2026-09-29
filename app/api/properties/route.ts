import { NextRequest, NextResponse } from 'next/server';
import { recommendedProperties, virtualTourProperties, PropertyItem } from '@/data/mockProperties';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type')?.toLowerCase().trim();
    const city = searchParams.get('city')?.toLowerCase().trim();
    const q = searchParams.get('q')?.toLowerCase().trim();
    const limit = searchParams.get('limit');

    // Combine all mock properties for the API dataset
    let results: PropertyItem[] = [...recommendedProperties, ...virtualTourProperties];

    // Filter by type: 'dijual', 'disewa', 'properti-baru'
    if (type) {
      if (type === 'properti-baru' || type === 'baru') {
        results = results.filter(
          (p) =>
            p.tag?.toLowerCase().includes('baru') ||
            p.isOfficialDeveloper ||
            p.isVirtualTour
        );
      } else if (type === 'disewa' || type === 'sewa') {
        results = results.filter((p) => p.tag?.toLowerCase().includes('sewa'));
      } else if (type === 'dijual' || type === 'jual') {
        results = results.filter(
          (p) =>
            p.tag?.toLowerCase().includes('jual') ||
            p.tag?.toLowerCase().includes('dijual')
        );
      }
    }

    // Filter by city
    if (city) {
      results = results.filter((p) => p.location.toLowerCase().includes(city));
    }

    // Keyword search across title, location, agency, or developer
    if (q) {
      results = results.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.location.toLowerCase().includes(q) ||
          (p.agentAgency && p.agentAgency.toLowerCase().includes(q)) ||
          (p.developerName && p.developerName.toLowerCase().includes(q))
      );
    }

    // Validate and apply limit if provided
    if (limit !== null) {
      const parsedLimit = Number(limit);
      if (isNaN(parsedLimit) || parsedLimit < 1) {
        return NextResponse.json(
          {
            success: false,
            error: 'Parameter limit tidak valid. Harus berupa angka positif.',
          },
          { status: 400 }
        );
      }
      results = results.slice(0, parsedLimit);
    }

    return NextResponse.json(
      {
        success: true,
        total: results.length,
        data: results,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: 'Gagal mengambil data properti',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
