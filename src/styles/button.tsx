import tw from "twin.macro";

const Button = tw.button`
  cursor-pointer
  text-3xl
  font-semibold
  border
  border-white
  outline-none
  bg-white/75
  hover:bg-white/10
  transition-all
  duration-100
`;

export default Button;
