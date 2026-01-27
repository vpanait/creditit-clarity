'use client'

import ArticleLayout from "@/components/feature/_newsroom/ArticleLayout";
import RelatedArticles from "@/components/feature/_newsroom/RelatedArticles";
import LogoCloud from "@/components/feature/_newsroom/LogoCloud";
import Footer from "@/components/feature/_landing-page/Footer";
import Navigation from "@/components/Navigation";

const TrukkerArticlePage = () => {
  const metadata = {
    category: 'Press Release',
    readTime: '4 min',
    publishedDate: 'Dec 16, 2025',
    author: 'Theo Retical',
    summary: 'Creditit has been selected by Trukker, one of the region\'s leading workforce platforms, to act as Data Agent and Backup Servicer for its receivables-backed financing program. This partnership marks a key milestone in building secure, institutional-grade financial infrastructure for the GCC.',
    externalLink: {
      text: 'Visit Trukker website',
      url: 'https://trukker.com',
    },
  };


  const sections = [
    {
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      title: 'Key Highlights',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      quote: {
        text: 'Our financing operations require predictable reporting, and full audit trails across thousands of shipments and invoices. Creditit platform gives our lenders confidence and allows us to scale volumes without adding operational burden.',
        author: 'Omar A.',
        role: 'Project Manager, Skyline Builders',
      },
    },
    {
      title: 'Why It Matters',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      title: 'About Trukker',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ];

  const relatedArticles = [
    {
      id: '2',
      image: '/backgrounds/earth-1.png',
      category: 'Data Infrastructure',
      readTime: '5 min',
      title: 'Why Lenders Are Moving Toward Real-Time Data Pipelines',
      description: 'Traditional monthly reporting cycles no longer meet the speed expectations of modern credit operations. This article explores how real-time data ingestion impr...',
      slug: '/newsroom',
    },
    {
      id: '3',
      image: '/backgrounds/benefit-1.png',
      category: 'Risk & Compliance',
      readTime: '6 min',
      title: 'Building Audit-Ready Credit Workflows in Emerging Markets',
      description: 'As cross-border transactions grow, institutions must adhere to stricter audit requirements. We break down the core components of an audit-ready data stack...',
      slug: '/newsroom',
    },
    {
      id: '4',
      image: '/backgrounds/earth-2.png',
      category: 'Credit Innovation',
      readTime: '4 min',
      title: 'How Structured Receivables Are Fueling New Lending Models',
      description: 'Receivables-backed financing is gaining traction across the GCC. This article explains the technology layer enabling scalable underwriting, dynamic risk scorin...',
      slug: '/newsroom',
    },
  ];

  const logos = [
    { name: 'Logo 1', image: '/partners/mawarid.png' },
    { name: 'Logo 2', image: '/partners/nebula.png' },
    { name: 'Logo 3', image: '/partners/quiqup.png' },
    { name: 'Logo 4', image: '/partners/mawarid.png' },
    { name: 'Logo 5', image: '/partners/nebula.png' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <ArticleLayout
        title="Trukker Announces Strategic Data Agency & Backup Servicing Partnership with Creditit"
        heroImage="/backgrounds/trukker.png"
        metadata={metadata}
        sections={sections}
        relatedArticles={
          <RelatedArticles articles={relatedArticles} />
        }
      />

      <Footer />
    </div>
  );
};

export default TrukkerArticlePage;

