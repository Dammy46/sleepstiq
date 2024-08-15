const Button = ({ label, styles, className }) => {
  return (
    <button className={`customBtn ${className}`} style={{ ...styles }}>
      {label}
    </button>
  );
};
export default Button;
