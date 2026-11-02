export const metadata = { title: 'تسعيرة - مقارنة الأسعار', description: 'قارن أسعار المنتجات في مصر مجانا' }
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl"><body style={{fontFamily:'system-ui', margin:0, background:'#f8fafc'}}>{children}</body></html>
  )
}
