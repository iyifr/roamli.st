import type { Metadata } from "next";
import { Bayon, Darker_Grotesque, Hanken_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Life is for the livin'",
  description: "A corner of the internet for more meaningful real-world experiences",
};

const Darker = Hanken_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-darker-grotesque'
})

export const Bayon_Font = Bayon({
  subsets: ['latin'],
  display: 'swap',
  weight: "400",
  variable: '--font-header'
})


export default function RootLayout({
  children,
  auth
}: Readonly<{
  children: React.ReactNode;
  auth: React.ReactNode;
}>) {



  return (
    <html lang="en" className={`${Darker.className} ${Bayon_Font.variable}`}>
      <body className="bg-background text-foreground text-lg dark">
        {children}
      </body>
    </html>
  );
}
