import PropTypes from "prop-types";

export const ButtonPrimary = ({ type, className, form, disabled, text }) => {
  return (
    <button type={type} className={className} form={form} disabled={disabled}>
      <span>{text}</span>
    </button>
  );
};

ButtonPrimary.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  form: PropTypes.string,
  disabled: PropTypes.any,
  text: PropTypes.string,
};
