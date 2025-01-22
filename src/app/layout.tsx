import './globals.css'

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt_BR">
      <body className={`antialiased`}>{children}</body>
      https://www.figma.com/design/DCntRodirIzIb4Nih9bJqd/Project-in-bio-(Community)-(Copy)?node-id=3-377&p=f&t=MN7CrKXDAp2R3xCQ-0
    </html>
  )
}
