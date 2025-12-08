'use client'

import Link from "next/link";
import { ROUTE, WIDTH_CONSTRAINT } from "@/const";
import { cn } from "@/lib/utils";
import SectionWrapper from "@/components/atoms/SectionWrapper";

interface Article {
  id: string;
  image: string;
  category: string;
  readTime: string;
  title: string;
  description: string;
  slug?: string;
}

interface RelatedArticlesProps {
  articles: Article[];
}

const RelatedArticles = ({ articles }: RelatedArticlesProps) => {
  return (
    <div className={cn(WIDTH_CONSTRAINT, "")}>
      <div className="flex flex-col gap-10 max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="flex flex-row items-end gap-4">
          <h2 className="font-syne text-[32px] font-bold text-white leading-[40px] flex-1">
            Newsroom
          </h2>
          <Link
            href={ROUTE.NEWSROOM}
            className="text-base text-[#D1F11F] hover:opacity-80 transition-opacity"
          >
            View all articles
          </Link>
        </div>

        {/* Articles Grid */}
        <div className="flex flex-col lg:flex-row gap-4">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </div>
  );
};

interface ArticleCardProps {
  article: Article;
}

const ArticleCard = ({ article }: ArticleCardProps) => {
  const content = (
    <>
      {/* Image */}
      <div className="w-full h-[226px] rounded-lg overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          {/* Category & Read Time */}
          <p className="text-sm text-standout leading-[18px]">
            {article.category} • {article.readTime}
          </p>

          {/* Title */}
          <h3 className="text-lg font-medium text-white leading-6">
            {article.title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-base text-muted-foreground leading-5 line-clamp-3">
          {article.description}
        </p>
      </div>
    </>
  );

  if (article.slug) {
    return (
      <Link href={article.slug} className="flex flex-col gap-5 lg:gap-6 flex-1 hover:opacity-90 transition-opacity">
        {content}
      </Link>
    );
  }

  return (
    <article className="flex flex-col gap-5 lg:gap-6 flex-1">
      {content}
    </article>
  );
};

export default RelatedArticles;

