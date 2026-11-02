import { NextRequest, NextResponse } from 'next/server'
export async function GET(req: NextRequest) {
  const q = req.nextUrl.searchParams.get('q') || ''
  const stores = [
    { store: 'أمازون مصر', base: 0.95 },
    { store: 'نون', base: 1.0 },
    { store: 'جوميا', base: 1.05 },
    { store: 'بي تك', base: 1.1 },
  ]
  const basePrice = 5000 + Math.floor(Math.random() * 20000)
  const products = stores.map(s => ({
    name: `${q} - ${s.store}`,
    price: Math.floor(basePrice * s.base),
    store: s.store,
    link: `https://www.google.com/search?q=${encodeURIComponent(q + ' ' + s.store)}`
  }))
  return NextResponse.json({ products })
}
