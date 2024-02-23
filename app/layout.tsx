import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { css } from "@/styled-system/css";
import { Theme } from '@radix-ui/themes'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Roamlist - The Social Network for city explorers",
  description: "A corner of the internet for more meaningful real-world experiences",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const styles = css({
    background: 'slate.2',
    color: 'slate.12',
    minHeight: 'screen',
    fontFamily: 'Inter'
  })

  return (
    <html lang="en" className="dark">
      <body className={styles}>
        <Theme appearance="dark" accentColor="indigo" grayColor="slate">
          {children}
        </Theme>
      </body>
    </html>
  );
}
