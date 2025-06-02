import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const data = await request.json()
  console.log('Postmark webhook received:', data)
  return NextResponse.json({ message: 'Webhook received' })
}
