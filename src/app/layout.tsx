import type { Metadata } from "next";
import { Poppins, DM_Sans } from "next/font/google";
import "../style/globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Head from "next/head";

const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--poppins",
});

const dmSans = DM_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--dm-sans",
});

// export const metadata: Metadata = {
//   title: 'Mobile application development in iOS and Android, Web application development in Node.js, ReactJS, Next.js, PHP and Services in CMS, ERP and e-Commerce | Technovatic Solutions',
//   description: 'Technovatic Solutions is one of the trusted partners for web and mobile application development and maintenance...',
//   keywords: "android, iphone, mobile application, ...",
//   openGraph: {
//     title: 'Mobile application development...',
//     description: 'Technovatic Solutions is one of the trusted partners...',
//     url: 'https://www.technovaticsolutions.com/',
//     type: 'website',
//     locale: 'en_US',
//     siteName: 'Technovatic Solutions',
//     images: [
//       {
//         url: 'https://www.technovaticsolutions.com/logo-1200X630.png',
//         width: 1200,
//         height: 630,
//         alt: 'Technovatic Solutions'
//       }
//     ]
//   }
// };

export const metadata: Metadata = {
  title: 'Amit Sahu | Web Developer | JavaScript, React.js, Node.js, Java | Tech Enthusiast',
  description:
    'I’m Amit Sahu, a passionate Web Developer and Computer Science student specializing in front-end development and proficient in React.js, Node.js, JavaScript, Java with DSA, and modern web technologies. Currently exploring innovative web solutions and open to opportunities that drive growth and learning.',
  keywords:
    'Amit Sahu, Web Developer, JavaScript, React.js, Node.js, Java,  Full Stack Web Developer, HTML, CSS, OOP, Portfolio, Tech Enthusiast, B.Tech CSE',
  openGraph: {
    title: 'Amit Sahu | Web Developer | JavaScript, React.js, Node.js',
    description:
      'Portfolio of Amit Sahu – Full Stack Developer and Tech Enthusiast skilled in JavaScript, React.js, Node.js, and Java with DSA. Currently pursuing B.Tech in Computer Science and Engineering.',
    url: 'https://yourdomain.com/',
    type: 'profile',
    locale: 'en_US',
    siteName: 'Amit Sahu Portfolio',
    images: [
      {
        url: 'https://yourdomain.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Amit Sahu | Web Developer'
      }
    ]
  }
};

// ✅ NEW: define this separately
export const viewport = {
  width: 'device-width',
  initialScale: 1,
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${dmSans.variable}`}>
      <head>
        <meta name="robots" content="noindex, nofollow" />
      </head>
      <body>
        {/* <Header /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
