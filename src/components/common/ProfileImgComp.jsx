import PropTypes from "prop-types";
import * as s from "../../assets/scss/modules/style.module.scss";

const ProfileImgComp = ({ title, existImg, src }) => {
  return (
    <div className={s.profileImgWrap}>
      <h1>{title}</h1>
      <div className={s.imgWrap}>
        {existImg ? <img src={src} alt="프로필" className={s.profileImg} /> : <img src="/img/default.png" alt="프로필" />}
      </div>
    </div>
  );
};

export default ProfileImgComp;

ProfileImgComp.propTypes = {
  title: PropTypes.string.isRequired,
  existImg: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
};
