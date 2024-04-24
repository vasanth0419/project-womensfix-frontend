import React from "react";

export default function Button({
  className,
  children,
  link,
  secondary,
  light,
  ...props
}) {
  return (
    <button
      className={`
    inline-flex items-center justify-center px-5 py-2.5 m-1
    bg-gray-800 text-white text-sm font-medium
    rounded-md shadow
    transition duration-200
    ${props.disabled ? "opacity-75 cursor-not-allowed" : ""}
    ${className}
`}
      {...props}
    >
      {children}
    </button>
  );
}
