import './globals.css';

export const metadata = {
  title: 'Campaign Companion',
  description: 'A Tool for Players and GMs Alike',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className=' bg-gray-900 overflow-auto'>{children}</body>
    </html>
  );
}
