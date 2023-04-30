import { StyledBtn } from "./styles";

interface Props {
  children: string;
  buttonType?: "google-sign-in" | "inverted";
  options?: object;
  onClick?: () => void;
}

const Button = ({ children, buttonType, options, onClick }: Props) => {
  return (
    <StyledBtn onClick={onClick} {...options} buttonType={buttonType}>
      {children}
    </StyledBtn>
  );
};

export default Button;
