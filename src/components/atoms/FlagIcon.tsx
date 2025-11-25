import * as RPNInput from "react-phone-number-input";
import flags from "react-phone-number-input/flags";


export const FlagIconComponent = ({ country, countryName }: RPNInput.FlagProps) => {
  const Flag = flags[country];

  return (
    <span className="flex h-4 w-6 overflow-hidden rounded-sm bg-foreground/20 [&_svg]:size-full shrink-0">
      {Flag && <Flag title={countryName} />}
    </span>
  );
};
