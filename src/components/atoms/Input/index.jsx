import PropTypes from "prop-types";

export default function Input(props) {
  const { placeholder, onChange, type, className, value } = props;
  return (
    <>
      <input
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        className={className}
        value={value}
        required
      />
    </>
  );
}

Input.propTypes = {
  type: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};

Input.defaultProps = {
  type: "",
  placeholder: "input",
  className: "border",
};
