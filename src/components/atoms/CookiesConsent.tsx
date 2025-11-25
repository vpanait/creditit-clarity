import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { loadGTM, removeGTM } from "@/lib/cookie-consent";

interface CookieConsentProps extends React.HTMLAttributes<HTMLDivElement> {
  demo?: boolean;
  onAcceptCallback?: () => void;
  onDeclineCallback?: () => void;
  onCustomizeCallback?: (preferences: CookiePreferences) => void;
}

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  functional: boolean;
  // marketing: boolean;
}

const CookieConsent = React.forwardRef<HTMLDivElement, CookieConsentProps>(
  (
    {
      demo = false,
      onAcceptCallback = () => { },
      onDeclineCallback = () => { },
      onCustomizeCallback = () => { },
      className,
      ...props
    },
    ref,
  ) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [hide, setHide] = React.useState(false);
    const [showCustomizeDialog, setShowCustomizeDialog] = React.useState(false);
    const [cookiePreferences, setCookiePreferences] = React.useState<CookiePreferences>({
      essential: true, // Always true, cannot be disabled
      analytics: true,
      functional: true,
      // marketing: true,
    });

    const handleAccept = React.useCallback(() => {
      setIsOpen(false);
      // Accept all cookies
      const allAccepted = {
        essential: true,
        analytics: true,
        functional: true,
        // marketing: true,
      };
      document.cookie = `credititCookieConsent=${JSON.stringify(allAccepted)}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
      
      // Load GTM when analytics cookies are accepted
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const containerId = (window as any).GTM_CONTAINER_ID;
      if (containerId && containerId !== 'GTM-XXXXXXX') {
        loadGTM(containerId);
      }
      
      setTimeout(() => {
        setHide(true);
      }, 700);
      onAcceptCallback();
    }, [onAcceptCallback]);

    const handleCustomize = React.useCallback(() => {
      setShowCustomizeDialog(true);
    }, []);

    const handleSavePreferences = React.useCallback(() => {
      setIsOpen(false);
      setShowCustomizeDialog(false);
      document.cookie = `credititCookieConsent=${JSON.stringify(cookiePreferences)}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
      
      // Load or remove GTM based on analytics preference
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const containerId = (window as any).GTM_CONTAINER_ID;
      if (containerId && containerId !== 'GTM-XXXXXXX') {
        if (cookiePreferences.analytics) {
          loadGTM(containerId);
        } else {
          removeGTM();
        }
      }
      
      setTimeout(() => {
        setHide(true);
      }, 700);
      onCustomizeCallback(cookiePreferences);
    }, [cookiePreferences, onCustomizeCallback]);

    const handleRejectAll = React.useCallback(() => {
      setIsOpen(false);
      setShowCustomizeDialog(false);
      const onlyEssential = {
        essential: true,
        analytics: false,
        functional: false,
        // marketing: false,
      };
      document.cookie = `credititCookieConsent=${JSON.stringify(onlyEssential)}; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
      
      // Remove GTM when analytics cookies are rejected
      removeGTM();
      
      setTimeout(() => {
        setHide(true);
      }, 700);
      onDeclineCallback();
    }, [onDeclineCallback]);

    React.useEffect(() => {
      try {
        setIsOpen(true);
        if (document.cookie.includes("credititCookieConsent=") && !demo) {
          setIsOpen(false);
          setTimeout(() => {
            setHide(true);
          }, 700);
        }
      } catch (error) {
        console.warn("Cookie consent error:", error);
      }
    }, [demo]);

    const updatePreference = (key: keyof CookiePreferences, value: boolean) => {
      setCookiePreferences(prev => ({
        ...prev,
        [key]: value
      }));
    };

    if (hide) return null;

    const containerClasses = cn(
      "fixed z-50 transition-all duration-700",
      !isOpen ? "translate-y-full opacity-0" : "translate-y-0 opacity-100",
      className,
    );

    const commonWrapperProps = {
      ref,
      className: cn(
        containerClasses,
        "bottom-0 right-0 w-full sm:max-w-sm",
      ),
      ...props,
    };

    return (
      <>
        <div {...commonWrapperProps}>
          <Card className="bg-surface-dark m-6 shadow-lg">
            <CardHeader className="space-y-2">
              <CardTitle className="text-base text-white !font-medium">Cookie Settings</CardTitle>
              <CardDescription className="text-sm text-standout">
                We use cookies to enhance your experience, analyze site traffic and deliver personalized content.{" "}
                <Link href="/cookies" className="text-white underline hover:underline">
                  Read our Cookie Policy
                </Link>
              </CardDescription>
            </CardHeader>
            <CardFooter className="flex gap-2 pt-2">
              <Button
                onClick={handleCustomize}
                variant="outline"
                className="flex-1"
              >
                Customize
              </Button>
              <Button onClick={handleAccept} className="flex-1" variant="reverse">
                Accept All
              </Button>
            </CardFooter>
          </Card>
        </div>

        {/* Cookie Customization Dialog */}
        <Dialog open={showCustomizeDialog} onOpenChange={setShowCustomizeDialog}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Cookie Preferences</DialogTitle>
              <DialogDescription>
                Choose which types of cookies you want to allow. You can change these settings at any time.{" "}
                <Link href="/cookies" className="text-white hover:underline">
                  Learn more about our cookie policy
                </Link>
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-6 py-4">
              {/* Essential Cookies */}
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label htmlFor="essential" className="text-sm font-medium">
                    Essential Cookies
                  </Label>
                  <p className="text-xs text-muted">
                    Required for the website to function properly
                  </p>
                </div>
                <Switch
                  id="essential"
                  checked={cookiePreferences.essential}
                  disabled={true}
                />
              </div>

              {/* Analytics Cookies */}
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label htmlFor="analytics" className="text-sm font-medium">
                    Analytics Cookies
                  </Label>
                  <p className="text-xs text-muted">
                    Help us understand how visitors interact with our website
                  </p>
                </div>
                <Switch
                  id="analytics"
                  checked={cookiePreferences.analytics}
                  onCheckedChange={(checked) => updatePreference('analytics', checked)}
                />
              </div>

              {/* Functional Cookies */}
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label htmlFor="functional" className="text-sm font-medium">
                    Functional Cookies
                  </Label>
                  <p className="text-xs text-muted">
                    Enable enhanced functionality and personalization
                  </p>
                </div>
                <Switch
                  id="functional"
                  checked={cookiePreferences.functional}
                  onCheckedChange={(checked) => updatePreference('functional', checked)}
                />
              </div>

              {/* Marketing Cookies */}
              {/* <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <Label htmlFor="marketing" className="text-sm font-medium">
                    Marketing Cookies
                  </Label>
                  <p className="text-xs text-muted">
                    Used to track visitors across websites for advertising
                  </p>
                </div>
                <Switch
                  id="marketing"
                  checked={cookiePreferences.marketing}
                  onCheckedChange={(checked) => updatePreference('marketing', checked)}
                />
              </div> */}
            </div>

            <DialogFooter className="flex gap-2">
              <Button
                variant="outline"
                onClick={handleRejectAll}
              >
                Reject All
              </Button>
              <Button onClick={handleSavePreferences}>
                Save Preferences
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </>
    );
  },
);

export default CookieConsent;