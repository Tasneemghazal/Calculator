import { ButtonProps } from "../../interfaces/IButton";
import { NumberButton } from "./Button.style";

function Button({ item, className, onClick }: ButtonProps) {
  return <NumberButton className={className} onClick={()=>onClick(item)}>{item}</NumberButton>;
}

export default Button;
