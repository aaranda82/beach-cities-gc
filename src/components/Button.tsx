import React from "react";

interface ButtonProps {
  onClickFn: () => void;
  text: string;
  secondary?: boolean;
  plain?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  onClickFn,
  text,
  secondary = false,
  plain = false,
}) => {
  const defaultStyle =
    "inline-flex w-full justify-center rounded-md border px-4 py-2 text-base font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 sm:w-auto sm:text-sm";

  const dynamicStyles = (() => {
    switch (true) {
      case secondary:
        return `border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-indigo-500 ${defaultStyle}`;
      case plain:
        return "hover:pointer hover:text-cyan-600 focus:text-cyan-800";
      default:
        return `border-transparent bg-cyan-600 text-white hover:bg-cyan-700 focus:ring-cyan-500 ${defaultStyle}`;
    }
  })();
  return (
    <button type="button" className={dynamicStyles} onClick={onClickFn}>
      {text}
    </button>
  );
};

export default Button;
