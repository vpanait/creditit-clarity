import * as React from "react";
import { CheckIcon, ChevronsUpDown } from "lucide-react";
import * as RPNInput from "react-phone-number-input";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandDialog,
} from "@/components/ui/command";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { FlagIconComponent } from "./FlagIcon";

type PhoneInputProps = Omit<
  React.ComponentProps<"input">,
  "onChange" | "value" | "ref"
> &
  Omit<RPNInput.Props<typeof RPNInput.default>, "onChange"> & {
    onChange?: (value: RPNInput.Value) => void;
  };

const PhoneInput: React.ForwardRefExoticComponent<PhoneInputProps> =
  React.forwardRef<React.ElementRef<typeof RPNInput.default>, PhoneInputProps>(
    ({ className, onChange, ...props }, ref) => {
      return (
        <RPNInput.default
          ref={ref}
          className={cn("flex", className)}
          flagComponent={FlagIconComponent}
          countrySelectComponent={CountrySelect}
          inputComponent={InputComponent}
          defaultCountry="AE"
          smartCaret={false}
          autoComplete="off"
          data-1p-ignore
          /**
           * Handles the onChange event.
           *
           * react-phone-number-input might trigger the onChange event as undefined
           * when a valid phone number is not entered. To prevent this,
           * the value is coerced to an empty string.
           *
           * @param {E164Number | undefined} value - The entered value
           */
          onChange={(value) => onChange?.(value || ("" as RPNInput.Value))}
          {...props}
        />
      );
    },
  );
PhoneInput.displayName = "PhoneInput";

const InputComponent = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<"input">
>(({ className, ...props }, ref) => (
  <Input
    className={cn("rounded-e-lg rounded-s-none", className)}
    {...props}
    ref={ref}
    autoComplete="off"
    data-1p-ignore
  />
));
InputComponent.displayName = "InputComponent";

type CountryEntry = { label: string; value: RPNInput.Country | undefined };

type CountrySelectProps = {
  disabled?: boolean;
  value: RPNInput.Country;
  options: CountryEntry[];
  onChange: (country: RPNInput.Country) => void;
};

const CountrySelect = ({
  disabled,
  value: selectedCountry,
  options: countryList,
  onChange,
}: CountrySelectProps) => {
  const [search, setSearch] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const filteredCountries = React.useMemo(() => {
    return countryList
      .filter(({ label }) => label.toLowerCase().includes(search.toLowerCase()))
      .sort((a, b) => {
        if (a.value === "AE") return -1;
        if (b.value === "AE") return 1;
        return a.label.localeCompare(b.label);
      });
  }, [countryList, search]);

  return (
    <>
      <Button
        type="button"
        variant="outline"
        className="flex gap-1 rounded-e-none rounded-s-lg border-r-0 px-3 focus:z-50 z-50"
        disabled={disabled}
        onClick={() => setOpen(true)}
      >
        <FlagIconComponent
          country={selectedCountry}
          countryName={selectedCountry}
        />
        <ChevronsUpDown
          className={cn(
            "-mr-2 size-4 opacity-50",
            disabled ? "hidden" : "opacity-100",
          )}
        />
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command shouldFilter={false} className="bg-surface">
          <div className="border-b border-surface-border">
            <CommandInput
              placeholder="Search country..."
              value={search}
              onValueChange={setSearch}
              className="bg-surface text-foreground"
            />
          </div>
          <ScrollArea className="h-[300px]">
            <CommandList>
              <CommandEmpty className="py-6 text-center text-sm text-muted-foreground">No country found.</CommandEmpty>
              <CommandGroup>
                {filteredCountries.map(({ value, label }) =>
                  value ? (
                    <CountrySelectOption
                      key={value}
                      country={value}
                      countryName={label}
                      selectedCountry={selectedCountry}
                      onChange={(country) => {
                        onChange(country);
                        setOpen(false);
                      }}
                    />
                  ) : null,
                )}
              </CommandGroup>
            </CommandList>
          </ScrollArea>
        </Command>
      </CommandDialog>
    </>
  );
};

interface CountrySelectOptionProps extends RPNInput.FlagProps {
  selectedCountry: RPNInput.Country;
  onChange: (country: RPNInput.Country) => void;
}

const CountrySelectOption = ({
  country,
  countryName,
  selectedCountry,
  onChange,
}: CountrySelectOptionProps) => {
  const isSelected = country === selectedCountry;
  return (
    <CommandItem
      className={cn(
        "gap-2 text-sm",
        "data-[selected=true]:text-foreground",
        // "text-foreground hover:bg-accent hover:text-foreground",
        isSelected && "bg-accent/50"
      )}
      onSelect={() => onChange(country)}
    >
      <FlagIconComponent country={country} countryName={countryName} />
      <span className="flex-1">{countryName}</span>
      <span>{`+${RPNInput.getCountryCallingCode(country)}`}</span>
      <CheckIcon
        className={cn(
          "ml-auto size-4 text-accent",
          isSelected ? "opacity-100" : "opacity-0"
        )}
      />
    </CommandItem>
  );
};


export { PhoneInput };