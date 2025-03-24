import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
}

const defaultDescription = "Ummah Institute offers expert GCSE tutoring in London for Mathematics and Chemistry. Our specialized program delivers outstanding results with personalized tuition for students. Join our classes in London for academic excellence.";
const defaultTitle = "Ummah Institute | GCSE Tutoring in London | Mathematics & Chemistry Tuition";
const defaultOgImage = "/UI-TrapnsparentBG-GreenFullText.png";
const siteUrl = "https://ummahinstitute.co.uk"; // Updated domain

export const SEO: React.FC<SEOProps> = ({
  title = defaultTitle,
  description = defaultDescription,
  canonicalUrl = siteUrl,
  ogImage = defaultOgImage,
  ogType = "website",
}) => {
  // Local Business Schema
  const localBusinessSchema = {
    "@context": "http://schema.org",
    "@type": "LocalBusiness",
    "@id": siteUrl,
    name: "Ummah Institute",
    alternateName: "Ummah Institute GCSE Tutoring",
    description: description,
    url: siteUrl,
    logo: `${siteUrl}/UI-TrapnsparentBG-GreenFullText.png`,
    image: `${siteUrl}/UI-TrapnsparentBG-GreenFullText.png`,
    telephone: "+44-123-456-7890",
    email: "info@ummahinstitute.co.uk",
    priceRange: "££",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday", "Sunday"],
        opens: "09:00",
        closes: "16:00"
      }
    ],
    sameAs: [
      "https://facebook.com/ummahinstitute",
      "https://instagram.com/ummahinstitute"
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "London",
      addressRegion: "London",
      addressCountry: "UK"
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "51.509865",
      longitude: "-0.118092"
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: "51.509865",
        longitude: "-0.118092"
      },
      geoRadius: "20000"
    }
  };

  // Educational Organization Schema
  const educationalOrgSchema = {
    "@context": "http://schema.org",
    "@type": "EducationalOrganization",
    name: "Ummah Institute",
    description: description,
    url: siteUrl,
    logo: `${siteUrl}/UI-TrapnsparentBG-GreenFullText.png`,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "info@ummahinstitute.co.uk"
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "London",
      addressCountry: "UK"
    },
    offers: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "GCSE Mathematics Tutoring",
          description: "Expert GCSE Mathematics tutoring for students in London"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "GCSE Chemistry Tutoring",
          description: "Specialized GCSE Chemistry tutoring for students in London"
        }
      }
    ]
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Ummah Institute" />
      <meta property="og:locale" content="en_GB" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Location-specific Meta Tags */}
      <meta name="geo.region" content="GB-LDN" />
      <meta name="geo.placename" content="London" />
      <meta name="geo.position" content="51.509865;-0.118092" />
      <meta name="ICBM" content="51.509865, -0.118092" />

      {/* Additional SEO Meta Tags */}
      <meta name="keywords" content="GCSE tutoring London, Mathematics tuition London, Chemistry tuition near me, London GCSE prep, Islamic tuition London, Ummah Institute, GCSE crash course, tuition center London, best GCSE tutors, online tutoring UK" />
      <meta name="author" content="Ummah Institute" />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(educationalOrgSchema)}
      </script>

      {/* Favicon and App Icons */}
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="manifest" href="/site.webmanifest" />

      {/* Theme Color */}
      <meta name="theme-color" content="#0f766e" />
      <meta name="msapplication-TileColor" content="#0f766e" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    </Helmet>
  );
};

export default SEO; 