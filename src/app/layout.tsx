import { Footer } from "@/components/Footer/Footer";
import "./globals.scss";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Navbar } from "@/components/Navbar/Navbar";
import Script from "next/script";
import logo from "@/assets/logo.png";
import { ToastContainer } from "react-toastify";
import { QueryProvider } from "@/components/QueryProvider";
import Modal from "@/components/Modals/Modal";
import { ContactModal } from "@/components/Modals/ContactModal";
const font = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Авто краны",
  icons: {
    icon: logo.src,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" amp="true">
      <head>
        <meta charSet="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1 minimum-scale=1 maximum-scale=1"
        />
        <meta
          name="description"
          content="Аренда кранов и спецтехники в Ташкенте и Узбекистане. Современные машины, квалифицированные операторы и быстрая доставка."
        />
        <meta
          name="keywords"
          content="аренда кранов Ташкент, спецтехника, автокраны, строительная техника Узбекистан"
        />
        <meta name="author" content="Crane" />
        <meta name="language" content="ru" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Crane — Аренда кранов и спецтехники в Ташкенте"
        />
        <meta
          property="og:description"
          content="Современные краны и техника для ваших задач в Ташкенте и по всему Узбекистану."
        />
        <meta property="og:image" content="http://avto-kran.uz" />
        <meta property="og:url" content="http://avto-kran.uz" />
        <meta property="og:locale" content="ru_UZ" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Crane — Аренда кранов и спецтехники в Ташкенте"
        />
        <meta
          name="twitter:description"
          content="Современные краны и техника для ваших задач в Ташкенте и Узбекистане."
        />
        <meta name="twitter:image" content="http://avto-kran.uz" />

        <link rel="canonical" href="http://avto-kran.uz" />
        <title>Crane — Аренда кранов и спецтехники в Ташкенте</title>
        <link rel="icon" href="./logo1.svg" />
        {/* Google Tag Manager */}
        <Script
          id="gtm-head"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','AW-16929257825');
            `,
          }}
        />
      </head>
      <body className={font.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=AW-16929257825"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {/* Яндекс.Метрика */}
        <Script
          id="yandex-metrika"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(m,e,t,r,i,k,a){
                m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],
                k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
              })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

              ym(101613635, "init", {
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true,
                webvisor:false
              });
            `,
          }}
        />
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/101613635"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
        <QueryProvider>
          <Navbar />
          <ToastContainer />
          <div className="layout">{children}</div>
          <Footer />
          <ContactModal />
        </QueryProvider>
      </body>
    </html>
  );
}
