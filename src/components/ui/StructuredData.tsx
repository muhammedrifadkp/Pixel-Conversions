import React from 'react';

export const StructuredData: React.FC = () => {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Pixel Conversions',
    url: 'https://pixelconversions.com',
    logo: 'https://pixelconversions.com/logo.jpeg',
    description: 'Web Development and Digital Marketing Agency building brands and digital experiences that drive growth across India, UAE, and globally.',
    telephone: '+916282336330',
    email: 'info@pixelconversions.com',
    sameAs: ['https://www.instagram.com/pixelconversion.ae/'],
    address: [
      {
        '@type': 'PostalAddress',
        streetAddress: '4th Floor, HiLITE Business Park, Phase 2, Poovangal',
        addressLocality: 'Kozhikode',
        addressRegion: 'Kerala',
        postalCode: '673014',
        addressCountry: 'IN',
      },
      {
        '@type': 'PostalAddress',
        streetAddress: 'BHIVE Platinum – Old Airport Road Campus, Old Airport Road, HAL 2nd Stage, Kodihalli, Indiranagar',
        addressLocality: 'Bengaluru',
        addressRegion: 'Karnataka',
        postalCode: '560008',
        addressCountry: 'IN',
      },
    ],
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Pixel Conversions - Web Development & Digital Marketing Agency',
    image: 'https://pixelconversions.com/og-image.jpg',
    telephone: '+916282336330',
    email: 'info@pixelconversions.com',
    priceRange: '₹20000 - ₹50000',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'HiLITE Business Park, Kozhikode & BHIVE Old Airport Rd, Bengaluru',
      addressLocality: 'Kozhikode',
      addressRegion: 'Kerala',
      postalCode: '673014',
      addressCountry: 'IN',
    },
    areaServed: ['India', 'United Arab Emirates', 'Global'],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </>
  );
};
