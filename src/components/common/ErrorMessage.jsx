import style from "../../assets/scss/style.module.scss";
import PropTypes from "prop-types";

function ErrorMessage({ text }) {
  return <div className={style.error}>{text}</div>;
}

export default ErrorMessage;

ErrorMessage.propTypes = {
  text: PropTypes.string.isRequired,
};
