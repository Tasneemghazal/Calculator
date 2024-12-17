import { ButtonProps } from "../../interfaces/IButton";
import { EquButton } from "./EqualButton.style";

function EqualButton({ item }: ButtonProps) {
  return <EquButton>{item}</EquButton>;
}

export default EqualButton;