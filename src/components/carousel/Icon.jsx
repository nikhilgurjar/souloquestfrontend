import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

export function LeftIcon() {
  return (
  <FaAngleLeft
    size={24}
    style={{
      transform: 'scaleX(-1)'
    }}
    />
  );
}

export function RightIcon() {
  return (
    <FaAngleRight
    size={24}
    />
  );
}
