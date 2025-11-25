'use client'

import { Button, type ButtonProps } from "@/components/ui/button";
import { PHONE_NUMBER } from "@/const";
import { useIsMobile } from "@/hooks/use-mobile";
import { useGTM } from "@/hooks/use-gtm";
import { WhatsappIcon } from "./icon";
import { cn } from "@/lib/utils";

interface BookCallButtonProps extends Omit<ButtonProps, 'children'> {
  className?: string;
  iconClassName?: string;
}

const WhatsappButton = ({ className, iconClassName, size, variant = "outline", ...props }: BookCallButtonProps) => {
  const isMobile = useIsMobile();
  const { trackContact } = useGTM();

  // Set default size based on screen width
  const defaultSize = isMobile ? "sm" : "lg";
  const buttonSize = size || defaultSize;

  const handleClick = () => {
    trackContact('whatsapp');
    const phoneNumber = PHONE_NUMBER;
    const message = "Hello! I'm interested in learning more about Creditit's services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Button
      className={cn(  variant === "ghost" && "hover:bg-primary/5 px-3", className)}
      size={buttonSize}
      variant={variant}
      onClick={handleClick}
      {...props}
    >
      <WhatsappIcon size={44} className={cn("fill-foreground", variant === "outlineReverse" ? "fill-white" : "fill-foreground", iconClassName)} />
      {variant !== "ghost" && (
        <span>
          Let's chat
        </span>
      )}
    </Button>
  );
};

export default WhatsappButton;
