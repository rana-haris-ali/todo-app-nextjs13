import '@/styles/globals.css';
import Link from 'next/link';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="container mx-auto">
        <Link href="/todos">Todos</Link>
        {children}
      </body>
    </html>
  );
}
