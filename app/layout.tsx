import '@/styles/globals.css';
import Link from 'next/link';
import Header from '@/app/header';
import LoginStore from '@/lib/context/loginContext';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <LoginStore>
        <body className="bg-gradient-to-r from-indigo-900 to-[#7B2869] text-white">
          <Header />
          <div className="container mx-auto">{children}</div>
        </body>
      </LoginStore>
    </html>
  );
}
