import { ButtonProps } from "../../interfaces/IButton";
import { NumberButton } from "./Button.style";

function Button({ item }: ButtonProps) {
  return <NumberButton>{item}</NumberButton>;
}

export default Button;
