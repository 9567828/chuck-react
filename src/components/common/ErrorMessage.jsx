import style from "../../assets/scss/modules/style.module.scss";
import PropTypes from "prop-types";

function ErrorMessage({ text }) {
  return <div className={style.redMsgFont}>{text}</div>;
}

export default ErrorMessage;

ErrorMessage.propTypes = {
  text: PropTypes.string.isRequired,
};
