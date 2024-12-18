import { ButtonProps } from "../../interfaces/IButton";
import { NumberButton } from "./Button.style";

function Button({ item, className }: ButtonProps) {
  return <NumberButton className={className}>{item}</NumberButton>;
}

export default Button;
