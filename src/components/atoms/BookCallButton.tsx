import { Button, type ButtonProps } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { useGTM } from "@/hooks/use-gtm";
import { useState } from "react";
import RequestCallForm from "@/components/atoms/RequestCallForm";

interface BookCallButtonProps extends Omit<ButtonProps, 'children'> {
  className?: string;
}

const BookCallButton = ({ className, size, variant = "outline", ...props }: BookCallButtonProps) => {
  const isMobile = useIsMobile();
  const { trackContact } = useGTM();
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Set default size based on screen width
  const defaultSize = isMobile ? "sm" : "lg";
  const buttonSize = size || defaultSize;

  const handleClick = () => {
    trackContact('book_call');
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
        Book a call
      </Button>
      
    
    </>
  );
};

export default BookCallButton;
