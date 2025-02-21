import PropTypes from "prop-types";

function EmptyMessage({ text }) {
  return <div className="empty-message">{text}</div>;
}

export default EmptyMessage;

EmptyMessage.propTypes = {
  text: PropTypes.string.isRequired,
};
