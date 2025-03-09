import PropTypes from "prop-types";
import * as s from "../../assets/scss/modules/style.module.scss";
import { useState } from "react";
import { useRef } from "react";

const ProfileEditImgComp = ({ title, currentImg }) => {
  const [imgFile, setImgFile] = useState(null);
  const [imgPath, setImgPath] = useState("");
  const imgRef = useRef(null);

  const previewImg = () => {
    if (imgRef.current && imgRef.current.files) {
      const img = imgRef.current.files[0];
      if (img) {
        setImgFile(img);

        const reader = new FileReader();
        reader.readAsDataURL(img);
        reader.onload = () => {
          setImgPath(reader.result);
        };
      } else {
        setImgFile(null);
        setImgPath("");
      }
    }
  };

  const handleReset = () => {
    setImgFile(null);
    setImgPath("");

    if (imgRef.current) {
      imgRef.current.value = null;
    }
  };

  return (
    <div className={s.profileEdit}>
      <h1>{title}</h1>
      <form>
        <label htmlFor="editImg" className={s.profileEdit}>
          {/* 파일을 추가하면 추가한 이미지를 보여주고 아니면 기존에 등록되어 있는 이미지 보여주기 / 기존 이미지는 prop으로 받기 */}
          {imgFile ? (
            <img src={imgPath} alt="이미지미리보기" />
          ) : (
            <img src={currentImg ? currentImg : "/img/default.png"} alt="이미지미리보기" />
          )}
        </label>
        <input
          type="file"
          name=""
          id="editImg"
          onChange={previewImg}
          ref={imgRef}
          className={s.editImgInput}
          accept=".png, .jpeg, .jpg"
        />
        <div className={s.btnWrap}>
          <button type="submit" className="sub-btn-flexible">
            수정하기
          </button>
          <button type="button" onClick={handleReset} className="sub-btn-flexible cancel">
            삭제
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileEditImgComp;

ProfileEditImgComp.propTypes = {
  title: PropTypes.string,
  currentImg: PropTypes.string,
};
