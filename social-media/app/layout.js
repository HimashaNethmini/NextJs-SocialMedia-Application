import { AntdRegistry } from '@ant-design/nextjs-registry';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <AntdRegistry>
          {children}
        </AntdRegistry>   
      </body>
    </html>
  );
}
