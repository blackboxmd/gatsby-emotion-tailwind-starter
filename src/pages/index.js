import React from 'react';

import {
  Layout,
  SEO,
  Hero,
  ContentWrapper,
  CardGrid,
} from '../components/elements';

export default function indexPage() {
  return (
    <Layout>
      <SEO
        title="Home"
        description="Home page for a Gatsby Starter, featuring Emotion and Tailwind css"
        keywords={[`starter`, `gatsby`, `javascript`, `react`]}
      />
      <Hero />
      <ContentWrapper>
        <CardGrid />
      </ContentWrapper>
    </Layout>
  );
}
