import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Open_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'Flipkart - Your Ultimate Online Shopping Destination',
  description: 'Shop for clothes, toys, home essentials, and more at Flipkart. Enjoy great deals, fast delivery, and a wide selection of products for your daily life.',
  keywords: ["Flipkart, online shopping, e-commerce, clothes, toys, home essentials, daily life products, fashion, electronics, India shopping"],
  openGraph: {
    "title": "Flipkart - Your Ultimate Online Shopping Destination",
    "description": "Shop for clothes, toys, home essentials, and more at Flipkart. Enjoy great deals, fast delivery, and a wide selection of products for your daily life.",
    "url": "https://www.flipkart.com",
    "siteName": "Flipkart",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/black-friday-concept-with-products-cart_23-2147709350.jpg",
        "alt": "A vibrant collection of diverse products from clothes, toys, and home essentials"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Flipkart - Your Ultimate Online Shopping Destination",
    "description": "Shop for clothes, toys, home essentials, and more at Flipkart. Enjoy great deals, fast delivery, and a wide selection of products for your daily life.",
    "images": [
      "http://img.b2bpic.net/free-photo/black-friday-concept-with-products-cart_23-2147709350.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${inter.variable} ${openSans.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
