import tw from "tailwind-styled-components";

export default function Button({ label, click }: Props) {
  return <ButtonSld onClick={click}>{label}</ButtonSld>;
}

export const ButtonSld = tw.button`
  flex
  py-2
  px-6
  text-white
  uppercase	
  font-bold
  cursor-pointer
  rounded-3xl
  border-none	
  bg-orange-color
  hover:bg-orange-hover-color
  duration-200
  ease-in-out
`

interface Props {
  label: string;
  click: () => void;
}
