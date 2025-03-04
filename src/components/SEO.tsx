import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
}

const defaultDescription = "Ummah Institute - Leading GCSE tutoring service specializing in Mathematics and Chemistry. Join our program for academic excellence and personalized learning.";
const defaultTitle = "Ummah Institute | Expert GCSE Tutoring in Mathematics & Chemistry";
const defaultOgImage = "/UI-TrapnsparentBG-GreenFullText.png"; // Using your existing logo as OG image
const siteUrl = "https://ummahinstitute.com"; // Replace with your actual domain

export const SEO: React.FC<SEOProps> = ({
  title = defaultTitle,
  description = defaultDescription,
  canonicalUrl = siteUrl,
  ogImage = defaultOgImage,
  ogType = "website",
}) => {
  const schemaOrgJSONLD = {
    "@context": "http://schema.org",
    "@type": "EducationalOrganization",
    name: "Ummah Institute",
    description: description,
    url: siteUrl,
    logo: `${siteUrl}/UI-TrapnsparentBG-GreenFullText.png`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+44-123-456-7890",
      contactType: "customer service",
      email: "info@ummahinstitute.com"
    },
    sameAs: [
      "https://facebook.com/ummahinstitute",
      "https://twitter.com/ummahinstitute",
      "https://instagram.com/ummahinstitute",
      "https://linkedin.com/company/ummahinstitute"
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "London",
      addressCountry: "UK"
    },
    offers: {
      "@type": "Offer",
      category: "Education",
      description: "GCSE Mathematics and Chemistry Tutoring"
    }
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

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Additional SEO Meta Tags */}
      <meta name="keywords" content="GCSE tutoring, Mathematics tuition, Chemistry tuition, Online tutoring, London tutoring, Islamic education, GCSE preparation, exam success, academic excellence" />
      <meta name="author" content="Ummah Institute" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>

      {/* Favicon and App Icons */}
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="manifest" href="/site.webmanifest" />

      {/* Theme Color */}
      <meta name="theme-color" content="#0f766e" />
    </Helmet>
  );
};

export default SEO; 