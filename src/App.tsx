/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import ProductGrid from './components/ProductGrid';
import Science from './components/Science';
import PerformanceCalculator from './components/PerformanceCalculator';
import StickyCTA from './components/StickyCTA';

export default function App() {
  return (
    <Layout>
      <Hero />
      <SocialProof />
      <ProductGrid />
      <Science />
      <PerformanceCalculator />
      <StickyCTA />
    </Layout>
  );
}
