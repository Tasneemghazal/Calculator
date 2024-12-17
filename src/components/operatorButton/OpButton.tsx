import { ButtonProps } from "../../interfaces/IButton";
import { OperatorButton } from "./OperatorButton.style";

function OpButton({ item }: ButtonProps) {
  return <OperatorButton>{item}</OperatorButton>;
}

export default OpButton;
