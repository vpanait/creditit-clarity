import { HELLO_EMAIL } from "@/const";

const EmailTo = ({ email = HELLO_EMAIL }: { email?: string }) => {
  return (
    <a href={`mailto:${email}`} className="text-foreground underline">
      {email}
    </a>
  )
};

export default EmailTo;
