'use client'

import { Button, type ButtonProps } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useGTM } from "@/hooks/use-gtm";
import RequestCallForm from "@/components/atoms/RequestCallForm";

interface IProps extends ButtonProps {
  className?: string;
}

const RequestCallButton = ({ className, size, children, variant = "dark", ...props }: IProps) => {
  const isMobile = useIsMobile();
  const { trackSignUp } = useGTM();
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Set default size based on screen width
  const defaultSize = isMobile ? "sm" : "lg";
  const buttonSize = size || defaultSize;

  const handleClick = () => {
    trackSignUp('sign_up_button');
    setIsFormOpen(true);
  };

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
