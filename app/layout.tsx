import type { Metadata } from "next";
import { Bayon, Darker_Grotesque, Inter } from "next/font/google";
import "./globals.css";
import { css } from "@/styled-system/css";
import { Theme } from '@radix-ui/themes'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Life is for the livin'",
  description: "A corner of the internet for more meaningful real-world experiences",
};

const Darker = Darker_Grotesque({
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
}: Readonly<{
  children: React.ReactNode;
}>) {

  const styles = css({
    background: 'slate.2',
    color: 'slate.12',
    minHeight: 'screen',
    '&.header': {
      fontFamily: Bayon_Font.variable,
      fontSize: 24
    }
  })

  return (
    <html lang="en">
      <body className={styles}>
        <Theme appearance="dark" accentColor="indigo" grayColor="slate" className={`${Darker.className} ${Bayon_Font.variable}`}>
          {children}
        </Theme>
      </body>
    </html>
  );
}
