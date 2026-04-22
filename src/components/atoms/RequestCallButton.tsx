'use client'

import { Button, type ButtonProps } from "@/components/ui/button";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useGTM } from "@/hooks/use-gtm";
import { useSiteMode } from "@/hooks/use-site-mode";
import RequestCallForm from "@/components/atoms/RequestCallForm";

interface IProps extends ButtonProps {
  className?: string;
}

const RequestCallButton = ({ className, size, children, variant = "dark", ...props }: IProps) => {
  const isMobile = useIsMobile();
  const { trackSignUp } = useGTM();
  const [isFormOpen, setIsFormOpen] = useState(false);
  const { mode } = useSiteMode();

  const defaultSize = isMobile ? "sm" : "lg";
  const buttonSize = size || defaultSize;

  const handleClick = () => {
    trackSignUp('sign_up_button');
    setIsFormOpen(true);
  };

  if (mode === 'borrower') {
    return (
      <Button asChild className={className} size={buttonSize} variant={variant} {...props}>
        <a href="https://platform.creditit.ai/" target="_blank" rel="noopener noreferrer">
          {children || "Go to Platform"}
        </a>
      </Button>
    );
  }

  return (
    <>
      <Button
        className={className}
        size={buttonSize}
        variant={variant}
        onClick={handleClick}
        {...props}
      >
        {children || "Request a Call"}
      </Button>

      <RequestCallForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
      />
    </>
  );
};

export default RequestCallButton;
