import React from "react";

function TextEllipsis({ text, className }) {
  return <p className={`text-ellipsis min-h-[10rem]  ${className}`}>{text}</p>;
}

export default TextEllipsis;
