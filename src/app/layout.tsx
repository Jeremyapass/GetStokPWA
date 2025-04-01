import "./globals.css";

export const metadata = {
  title: "GetStok",
  description: "Driver Application called GetStok",
  manifest: "/manifest_and_icons/manifest.json",
  themeColor: "#000000",
  viewport:
    "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
  icons: {
    icon: ["/favicon_io/favicon.ico"],
    shortcut: ["/apple-touch-icon.png"],
    apple: ["/apple-touch-icon.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="application-name" content="GetStok" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="GetStok" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className="h-screen">
        {children}
        Layout
      </body>
    </html>
  );
}
