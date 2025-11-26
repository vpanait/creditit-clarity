import * as RPNInput from "react-phone-number-input";
import flags from "react-phone-number-input/flags";


export const FlagIconComponent = ({ country, countryName }: RPNInput.FlagProps) => {
  const Flag = flags[country];

  return (
    <span className="flex items-center justify-center h-4 w-6 overflow-hidden rounded-sm [&_svg]:size-full shrink-0">
      {Flag && <Flag title={countryName} />}
    </span>
  );
};
