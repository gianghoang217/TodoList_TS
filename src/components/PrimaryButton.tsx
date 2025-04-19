import { MouseEvent, ReactNode } from "react";
function PrimaryButton({
  children,
  onClick,
}: {
  children: ReactNode | string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}) {
  return (
    <button onClick={onClick} className="px-3 py-2 rounded bg-teal-500 text-white ">
      {children}
    </button>
  );
}

export default PrimaryButton;
