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
      <body>{children}</body>
    </html>
  );
}
