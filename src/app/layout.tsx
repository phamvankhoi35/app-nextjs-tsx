import { AntdRegistry } from '@ant-design/nextjs-registry';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Hello",
  description: "ALO"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AntdRegistry>
          {children}
        </AntdRegistry>
      </body>
    </html>
  );
}
