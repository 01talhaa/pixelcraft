import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PixelPrimp | Photo Editing, Graphic Design, Web Design, Branding, Motion Graphics',
  description: 'PixelPrimp offers professional photo editing, graphic design, web design, branding, motion graphics, print design, and more. Elevate your brand with our creative services.',
  keywords: [
    'PixelPrimp', 'photo editing', 'graphic design', 'web design', 'branding', 'motion graphics', 'print design',
    'color correction', 'retouching', 'logo design', 'brand identity', 'UI/UX', 'animation', 'creative agency',
    'professional design', 'digital marketing', 'visual identity', 'portfolio', 'creative services', 'image enhancement',
    'social media graphics', 'business cards', 'brochures', 'flyers', 'posters', 'brand strategy', 'style guides',
    'HDR processing', 'background removal', 'wedding photo editing', 'product photography', 'real estate photo editing',
    'marketing collateral', 'packaging design', 'illustration', 'icon design', 'explainer video', 'brand guidelines',
    'creative studio', 'design agency', 'digital branding', 'visual communication', 'creative solutions', 'design portfolio'
  ],
  openGraph: {
    title: 'PixelPrimp | Photo Editing, Graphic Design, Web Design, Branding',
    description: 'PixelPrimp offers professional creative services: photo editing, graphic design, web design, branding, motion graphics, and more.',
    url: 'https://pixelprimp.com',
    siteName: 'PixelPrimp',
    images: [
      {
        url: '/PixelprimpFinal.png',
        width: 800,
        height: 600,
        alt: 'PixelPrimp Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@pixelprimp',
    title: 'PixelPrimp | Photo Editing, Graphic Design, Web Design, Branding',
    description: 'PixelPrimp offers professional creative services: photo editing, graphic design, web design, branding, motion graphics, and more.',
    images: ['/PixelprimpFinal.png'],
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="PixelPrimp" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="language" content="English" />
        <meta name="copyright" content="PixelPrimp" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="7 days" />
        <meta name="google" content="notranslate" />
        <link rel="canonical" href="https://pixelprimp.com" />
        <link rel="alternate" hrefLang="en" href="https://pixelprimp.com" />
        {/* Favicon and icons */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.svg" />
        <link rel="mask-icon" href="/favicon.svg" color="#2563eb" />
        <link rel="manifest" href="/manifest.json" />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pixelprimp.com" />
        <meta property="og:title" content="PixelPrimp | Photo Editing, Graphic Design, Web Design, Branding" />
        <meta property="og:description" content="PixelPrimp offers professional creative services: photo editing, graphic design, web design, branding, motion graphics, and more." />
        <meta property="og:image" content="/PixelprimpFinal.png" />
        <meta property="og:site_name" content="PixelPrimp" />
        <meta property="og:locale" content="en_US" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@pixelprimp" />
        <meta name="twitter:title" content="PixelPrimp | Photo Editing, Graphic Design, Web Design, Branding" />
        <meta name="twitter:description" content="PixelPrimp offers professional creative services: photo editing, graphic design, web design, branding, motion graphics, and more." />
        <meta name="twitter:image" content="/PixelprimpFinal.png" />
        {/* Schema.org Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'PixelPrimp',
          url: 'https://pixelprimp.com',
          logo: '/PixelprimpFinal.png',
          sameAs: [
            'https://www.facebook.com/pixelprimp',
            'https://www.instagram.com/pixelprimp',
            'https://www.linkedin.com/company/pixelprimp',
            'https://twitter.com/pixelprimp'
          ],
          description: 'PixelPrimp offers professional photo editing, graphic design, web design, branding, motion graphics, print design, and more. Elevate your brand with our creative services.'
        }) }} />
      </head>
      <body>{children}</body>
    </html>
  )
}
