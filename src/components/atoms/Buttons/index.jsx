import PropTypes from "prop-types";

export default function Button(props) {
  const { children, className, onClick, disabled } = props;
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
};

Button.defaultProps = {
  className: "bg-slate-400 p-2",
};
