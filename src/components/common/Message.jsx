import PropTypes from "prop-types";
import styled from "styled-components";

const Div = styled.div`
  font-size: 14px;
  color: ${(props) => (props.color === "red" ? "#ff3333" : "#757575")};
  text-align: left;
  padding: 8px 8px 0;
`;

function Message({ text, color }) {
  return <Div color={color}>{text}</Div>;
}

export default Message;

Message.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
