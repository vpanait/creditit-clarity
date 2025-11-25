import { LINKEDIN_URL, PHONE_NUMBER } from "@/const";
import { Button } from "../ui/button";
import { LinkedInIcon, WhatsappIcon } from "./icon";

const FooterSocialLinks = () => {
  return (
    <>
      <Button
        variant="ghost"
        className="p-0 hover:cursor-pointer hover:bg-transparent"
        onClick={() => {
          const linkedinUrl = LINKEDIN_URL;
          window.open(linkedinUrl, '_blank');
        }}
      >
        <LinkedInIcon className="fill-white" />
      </Button>
      <Button
        variant="ghost"
        className="p-0 hover:cursor-pointer hover:bg-transparent"
        onClick={() => {
          const phoneNumber = PHONE_NUMBER;
          const message = "Hello! I'm interested in learning more about Creditit's services.";
          const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
          window.open(whatsappUrl, '_blank');
        }}
      >
        <WhatsappIcon className="fill-white" />
      </Button>
    </>
  );
};

export default FooterSocialLinks;
