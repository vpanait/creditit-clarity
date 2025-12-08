'use client'

import { ReactNode } from 'react';
import { WIDTH_CONSTRAINT } from "@/const";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import SectionWrapper from "@/components/atoms/SectionWrapper";
import { ArrowUpRightIcon } from 'lucide-react';

export interface ArticleMetadata {
  category: string;
  readTime: string;
  publishedDate: string;
  author: string;
  summary: string;
  externalLink?: {
    text: string;
    url: string;
  };
}

export interface ArticleQuote {
  text: string;
  author: string;
  role: string;
}

export interface ArticleSection {
  title?: string;
  content?: string | ReactNode;
  quote?: ArticleQuote;
}

export interface ArticleLayoutProps {
  title: string;
  heroImage: string;
  metadata: ArticleMetadata;
  sections: ArticleSection[];
  relatedArticles?: ReactNode;
  logoCloud?: ReactNode;
}

const ArticleLayout = ({
  title,
  heroImage,
  metadata,
  sections,
  relatedArticles,
}: ArticleLayoutProps) => {
  return (
    <>
      <SectionWrapper >
        <div className={cn(WIDTH_CONSTRAINT, "pt-36 pb-20")}>
          {/* Header Section - Centered */}
          <div className="flex flex-col items-center gap-2 mb-10">
            <p className="text-sm text-standout leading-[18px]">
              {metadata.category} • {metadata.readTime}
            </p>
            <h1 className="font-syne text-[32px] font-bold text-white leading-[40px] text-center max-w-[782px]">
              {title}
            </h1>
          </div>

          {/* Hero Image */}
          <div className="w-full max-w-[1200px] mx-auto mb-10">
            <div className="w-full h-[459px] rounded-lg overflow-hidden">
              <img
                src={heroImage}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Two Column Layout */}
          <div className="flex flex-col lg:flex-row gap-20">
            {/* Left Column - Metadata */}
            <div className="w-full lg:w-[350px] flex-shrink-0 flex flex-col gap-6">
              {/* Published Date */}
              <div className="flex flex-col gap-1">
                <p className="text-xs text-standout">Published</p>
                <p>{metadata.publishedDate}</p>
              </div>

              {/* Author */}
              <div className="flex flex-col gap-1">
                <p className="text-xs text-standout">Author</p>
                <p>{metadata.author}</p>
              </div>

              {/* Divider */}
              <Separator className="bg-standout" />

              {/* Summary */}
              <div className="flex flex-col gap-4">
                <p className="text-base/5 text-standout">
                  {metadata.summary}
                </p>

                {/* External Link */}
                {metadata.externalLink && (
                  <Link
                    href={metadata.externalLink.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-base text-accent hover:opacity-80 transition-opacity"
                  >
                    <span>{metadata.externalLink.text}</span>
                    <ArrowUpRightIcon className="w-4 h-4" />
                  </Link>
                )}
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="flex-1">
              <div className="flex flex-col gap-10">
                {sections.map((section, index) => (
                  <div key={index} className="flex flex-col gap-4">
                    {section.title && (
                      <h2 className="text-base font-medium leading-5">
                        {section.title}
                      </h2>
                    )}
                    {typeof section.content === 'string' ? (
                      <p className="text-base text-muted-foreground leading-5">
                        {section.content}
                      </p>
                    ) : (
                      section.content
                    )}

                    {section.quote && (
                      <div className="flex flex-col gap-6 py-6 pl-4 lg:pl-20">
                        <blockquote className="font-syne text-[24px] font-bold leading-[30px]">
                          "{section.quote.text}"
                        </blockquote>
                        <div className="flex flex-col gap-1">
                          <p className="text-sm leading-[18px]">{section.quote.author}</p>
                          <p className="text-xs text-standout leading-[14px]">{section.quote.role}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}

              </div>
            </div>
          </div>

          {/* Logo Cloud Section */}
          {/* {logoCloud && (
            <div className="max-w-[1200px] mx-auto mb-20">
              {logoCloud}
            </div>
          )} */}

          {/* Related Articles Section */}
        </div>
      </SectionWrapper>

      {relatedArticles && (
        <SectionWrapper className="border-t border-[#233333] py-20">
          {relatedArticles}
        </SectionWrapper>
      )}
    </>
  );
};

export default ArticleLayout;

