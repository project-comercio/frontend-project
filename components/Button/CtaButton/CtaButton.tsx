import React from "react";

interface CtaButtonProps {
  label: string;
  href: string;
}

const CtaButton = ({label, href} : CtaButtonProps) => {
  return (
    <button type="button" className="cta">
      <span>{label}</span>
      <svg width="15px" height="10px" viewBox="0 0 13 10">
        <path d="M1,5 L11,5" />
        <polyline points="8 1 12 5 8 9" />
      </svg>
    </button>
  );
};

export default CtaButton;
