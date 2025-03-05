import PropTypes from "prop-types";

function AvatarComponent({ img, src, name }) {
  return img ? <img src={src} alt="" className="avatar" /> : <span className="first-name">{name.slice(0, 1)}</span>;
}

export default AvatarComponent;

AvatarComponent.propTypes = {
  img: PropTypes.any.isRequired,
  src: PropTypes.any.isRequired,
  name: PropTypes.any.isRequired,
};
