import { SlugCommon } from ".";

export interface Calculator extends SlugCommon {
  content: ICalculatorContent;
  testimonialIds: string[];
  faqIds: string[];
}

export interface ICalculatorContent {
  image: string;
  items: string[];
}
