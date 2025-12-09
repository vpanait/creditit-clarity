'use client'

import Navigation from "@/components/Navigation";
import Footer from "@/components/feature/_landing-page/Footer";
import { Button } from "@/components/ui/button";
import { WIDTH_CONSTRAINT } from "@/const";
import { cn } from "@/lib/utils";
import Link from "next/link";
import SectionWrapper from "@/components/atoms/SectionWrapper";
import RequestCallButton from "@/components/atoms/RequestCallButton";

interface ArticleSnippet {
  id: string;
  image: string;
  category: string;
  readTime: string;
  title: string;
  description: string;
  slug?: string;
}

const articles: ArticleSnippet[] = [
  {
    id: '1',
    image: '/backgrounds/trukker.png',
    category: 'Press Release',
    readTime: '4 min',
    title: 'Trukker Announces Strategic Data Agency & Backup Servicing Partnership with Creditit',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostr Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostr ',
    slug: '/newsroom/trukker',
  },
  {
    id: '2',
    image: '/backgrounds/earth-1.png',
    category: 'Data Infrastructure',
    readTime: '5 min',
    title: 'Why Lenders Are Moving Toward Real-Time Data Pipelines',
    description: 'Traditional monthly reporting cycles no longer meet the speed expectations of modern credit operations. This article explores how real-time data ingestion impr Traditional monthly reporting cycles no longer meet the speed expectations of modern credit operations. This article explores how real-time data ingestion impr '
  },
  {
    id: '3',
    image: '/backgrounds/benefit-1.png',
    category: 'Risk & Compliance',
    readTime: '6 min',
    title: 'Building Audit-Ready Credit Workflows in Emerging Markets',
    description: 'As cross-border transactions grow, institutions must adhere to stricter audit requirements. We break down the core components of an audit-ready data stack...'
  },
  {
    id: '4',
    image: '/backgrounds/earth-2.png',
    category: 'Credit Innovation',
    readTime: '4 min',
    title: 'How Structured Receivables Are Fueling New Lending Models',
    description: 'Receivables-backed financing is gaining traction across the GCC. This article explains the technology layer enabling scalable underwriting, dynamic risk scorin...'
  }
];

const NewsroomPage = () => {
  return (
    <>
      <Navigation />

      <SectionWrapper className="min-h-screen" >
        <div className={cn(WIDTH_CONSTRAINT, "pt-36 pb-0")}>
          {/* Title */}
          <h1 className="font-syne text-[44px] font-bold text-white leading-[54px] mb-10">
            Newsroom
          </h1>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-20 mb-16 lg:mb-30 items-stretch">
            {articles?.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className={cn("bg-surface border-t border-background py-6")}>
        <div className={cn(WIDTH_CONSTRAINT, "flex flex-col items-center justify-center my-20")}>
          <p className="text-sm text-standout mb-2">Contact</p>

          <h2 className="font-syne text-[32px] font-bold text-white leading-[40px] mb-10">
            Schedule a Consultation
          </h2>

          <RequestCallButton size="lg" variant="default" className="text-base">Request a Call</RequestCallButton>
        </div>

      </SectionWrapper>

      <Footer />
    </>
  );
};

interface ArticleCardProps {
  article: ArticleSnippet;
}

const ArticleCard = ({ article }: ArticleCardProps) => {
  const content = (
    <div className="flex flex-col gap-6 h-full">
      {/* Image */}
      <div className="w-full h-[340px] rounded-lg overflow-hidden flex-shrink-0">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section - grows to fill space */}
      <div className="flex flex-col gap-6 justify-between flex-1">
        <div className="flex flex-col gap-2 flex-1">
          {/* Category & Read Time */}
          <p className="text-sm text-standout">
            {article.category} • {article.readTime}
          </p>

          {/* Title */}
          <h3 className="text-lg/6 font-medium">
            {article.title}
          </h3>
        </div>

        {/* Description - pushed to bottom with mt-auto */}
        <p className="text-base text-muted-foreground leading-5 line-clamp-2">
          {article.description}
        </p>
      </div>
    </div>
  );

  if (article.slug) {
    return (
      <Link href={article.slug} className="flex flex-col h-full hover:opacity-90 transition-opacity">
        {content}
      </Link>
    );
  }

  return (
    <article className="flex flex-col h-full">
      {content}
    </article>
  );
};

export default NewsroomPage;

