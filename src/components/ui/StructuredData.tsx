import React from 'react';

export const StructuredData: React.FC = () => {
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://pixelconversions.com/#website',
    name: 'Pixel Conversions',
    url: 'https://pixelconversions.com',
    description: 'Web Development & Digital Marketing Agency',
    publisher: {
      '@id': 'https://pixelconversions.com/#organization',
    },
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://pixelconversions.com/#organization',
    name: 'Pixel Conversions',
    url: 'https://pixelconversions.com',
    logo: 'https://pixelconversions.com/logo.jpeg',
    image: 'https://pixelconversions.com/logo.jpeg',
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

  const kozhikodeLocalBusiness = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': 'https://pixelconversions.com/#kozhikode-office',
    name: 'Pixel Conversions - Web Development Agency Kozhikode',
    image: 'https://pixelconversions.com/logo.jpeg',
    url: 'https://pixelconversions.com',
    telephone: '+916282336330',
    email: 'info@pixelconversions.com',
    priceRange: '₹20000 - ₹50000',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '4th Floor, HiLITE Business Park, Phase 2, Poovangal',
      addressLocality: 'Kozhikode',
      addressRegion: 'Kerala',
      postalCode: '673014',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 11.2481,
      longitude: 75.8344,
    },
    areaServed: ['Kozhikode', 'Kerala', 'India', 'United Arab Emirates', 'Global'],
  };

  const bengaluruLocalBusiness = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': 'https://pixelconversions.com/#bengaluru-office',
    name: 'Pixel Conversions - Web Development Agency Bengaluru',
    image: 'https://pixelconversions.com/logo.jpeg',
    url: 'https://pixelconversions.com',
    telephone: '+916282336330',
    email: 'info@pixelconversions.com',
    priceRange: '₹20000 - ₹50000',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'BHIVE Platinum – Old Airport Road Campus, Old Airport Road, HAL 2nd Stage, Kodihalli, Indiranagar',
      addressLocality: 'Bengaluru',
      addressRegion: 'Karnataka',
      postalCode: '560008',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 12.9602,
      longitude: 77.6483,
    },
    areaServed: ['Bengaluru', 'Karnataka', 'India', 'Global'],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(kozhikodeLocalBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bengaluruLocalBusiness) }}
      />
    </>
  );
};
