import PropTypes from "prop-types";
import * as s from "../../assets/scss/modules/style.module.scss";

const ProfileImgComp = ({ title, isEdit, existImg, src }) => {
  return isEdit ? (
    <div className={s.profileEdit}>
      <h1>{title}</h1>
      <form id="symbolForm" className="">
        <label htmlFor="editSymbolImg"></label>
        <input type="file" name="" id="editSymbolImg" className={s.editImgInput} />
        <div className={s.btnWrap}>
          <button type="submit" className="sub-btn-flexible">
            수정하기
          </button>
          <input type="reset" className="sub-btn-flexible cancel" value="삭제" />
        </div>
      </form>
    </div>
  ) : (
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
  title: PropTypes.string,
  isEdit: PropTypes.bool,
  existImg: PropTypes.bool,
  src: PropTypes.string,
};
