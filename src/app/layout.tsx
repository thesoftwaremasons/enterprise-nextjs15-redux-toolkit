import type { Metadata } from 'next';
import './globals.css';
import { StoreProvider } from '@/lib/StoreProvider';

export const metadata: Metadata = {
  title: 'Enterprise Next.js 15 + Redux Toolkit',
  description: 'Enterprise-grade Next.js 15 application with Redux Toolkit and TypeScript',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
