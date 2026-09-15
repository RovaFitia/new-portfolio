import React from "react";
import { Helmet } from "react-helmet-async";

export type SEOProps = {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  noindex?: boolean;
};

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonical,
  image = "https://codeurmdg.tech/og-image.webp",
  noindex = false,
}) => {
  const siteName = "Codeur MDG";

  return (
    <Helmet>
      {/* Balises standard */}
      <title>{`${title} | ${siteName}`}</title>
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph (Facebook, LinkedIn, Discord) */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={`${title} | ${siteName}`} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:image" content={image} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${title} | ${siteName}`} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};
