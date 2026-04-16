import type { Metadata } from 'next';
import TanStackProvider from '@/components/providers/TanStackProvider/TanStackProvider';
import Header from '@/components/layout/Header/Header';
import './globals.css';

export const metadata: Metadata = {
  title: 'Campers Catalog',
  description: 'Catalog of campers for travel enthusiasts',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <TanStackProvider>{children}</TanStackProvider>
      </body>
    </html>
  );
}
