import React from "react";

function TextEllipsis({ text, limit, style }) {
  return (
    <p style={style} className="text-ellipsis">
      {text.length > limit ? `${text.substring(0, limit)}...` : text}
    </p>
  );
}

export default TextEllipsis;
