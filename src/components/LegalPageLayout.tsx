'use client'

import { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Navigation from './Navigation';
import Footer from './feature/_landing-page/Footer';
import { cn } from '@/lib/utils';
import { Separator } from './ui/separator';
import { LAST_UPDATED, ROUTE } from '@/const';
import EmailTo from './atoms/EmailTo';

interface LegalPageLayoutProps {
  children: ReactNode;
  title: string;
  className?: string;
}

const LegalPageLayout = ({ children, title, className }: LegalPageLayoutProps) => {
  const pathname = usePathname();

  const menuItems = [
    { path: ROUTE.TERMS_OF_USE, label: 'Terms of Use' },
    { path: ROUTE.PRIVACY_POLICY, label: 'Privacy Policy' },
    { path: ROUTE.COOKIES, label: 'Cookies' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="mx-auto px-4 py-8 max-w-[980px] pt-36">
        <div className="font-syne text-[44px] font-bold text-text-primary mb-16">
          {title}
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-standout text-xs">Last updated</span>
          <span>{LAST_UPDATED}</span>
        </div>

        <Separator className="mt-6 mb-10" />

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Sidebar - Table of Contents */}
          <div className="w-full lg:w-[240px] shrink-0">
            <div className="sticky top-8">
              <div className="text-xs font-regular text-standout mb-4">Table of contents</div>

              <nav className="space-y-3">
                {menuItems.map((item) => {
                  const isActiveItem = pathname === item.path;
                  return (
                    <Link
                      key={item.path}
                      href={item.path}
                      className={cn(
                        "flex items-center space-x-1.5"
                      )}
                    >
                      <div
                        className={cn(
                          "w-2 h-2 rounded-full border",
                          isActiveItem ? "bg-foreground border-foreground" : "bg-transparent border-standout"
                        )}
                      />
                      <span className={cn(
                        "text-base font-regular",
                        isActiveItem
                          ? 'text-foreground '
                          : 'text-standout'
                      )}>
                        {item.label}
                      </span>
                    </Link>
                  )
                })}
              </nav>

              <Separator className="my-6" />

              {/* Contact Information */}
              <p className="text-base font-regular text-muted">
                To contact a legal representative at Creditit, please email{' '}
                <EmailTo />
              </p>
            </div>
          </div>

          {/* Main Content */}
          <div className={cn("grow prose prose-lg max-w-none text-text-primary space-y-10", className)}>
            {children}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LegalPageLayout;
