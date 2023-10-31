import React from "react";

function Button({ children, ...props }) {
  return (
    <button
      {...props}
      style={{
        backgroundColor: "#037415",
        color: "#fff",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        margin: "10px",
      }}
    >
      {children}
    </button>
  );
}

export default Button;
