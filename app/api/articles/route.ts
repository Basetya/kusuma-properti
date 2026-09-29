import { NextRequest, NextResponse } from 'next/server';
import { propertyArticles, ArticleItem } from '@/data/editorialData';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category')?.toLowerCase().trim();
    const q = searchParams.get('q')?.toLowerCase().trim();
    const limit = searchParams.get('limit');

    let results: ArticleItem[] = [...propertyArticles];

    // Filter by category
    if (category) {
      results = results.filter((a) =>
        a.category.toLowerCase().includes(category)
      );
    }

    // Filter by keyword query
    if (q) {
      results = results.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.excerpt.toLowerCase().includes(q) ||
          a.author.toLowerCase().includes(q)
      );
    }

    // Validate and apply limit if specified
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
        message: 'Gagal mengambil data artikel',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
