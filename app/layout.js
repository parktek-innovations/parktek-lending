import "./globals.css";

export const metadata = {
  title: "ParkTek",
  description: "Connecting and securing every vehicle with ParkTek's smart parking ecosystem."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
