import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { llmJudgeResults } from '@/db/schema';
import { eq, gte, lte, and, desc } from 'drizzle-orm';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = Math.min(parseInt(searchParams.get('limit') || '50'), 100);
    const offset = parseInt(searchParams.get('offset') || '0');
    const configId = searchParams.get('configId');
    const minScore = searchParams.get('minScore');
    const maxScore = searchParams.get('maxScore');

    let query = db.select().from(llmJudgeResults);
    const conditions = [];

    if (configId) {
      conditions.push(eq(llmJudgeResults.configId, parseInt(configId)));
    }

    if (minScore) {
      conditions.push(gte(llmJudgeResults.score, parseInt(minScore)));
    }

    if (maxScore) {
      conditions.push(lte(llmJudgeResults.score, parseInt(maxScore)));
    }

    if (conditions.length > 0) {
      query = query.where(and(...conditions));
    }

    const results = await query
      .orderBy(desc(llmJudgeResults.createdAt))
      .limit(limit)
      .offset(offset);

    return NextResponse.json(results);
  } catch (error) {
    console.error('GET error:', error);
    return NextResponse.json({ error: 'Internal server error: ' + error }, { status: 500 });
  }
}