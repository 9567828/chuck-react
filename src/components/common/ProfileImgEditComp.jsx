import PropTypes from "prop-types";
import * as s from "../../assets/scss/modules/style.module.scss";
import { useState } from "react";
import { useRef } from "react";

const ProfileEditImgComp = ({ title, currentImg, inputId }) => {
  // title: 제목이 있는 경우 (회사이미지 등)
  // currentImg: DB에 저장 된 현재 이미지 경로
  // inputId: img, label 태그 이어줄 ID값 (label에 자동적용)

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
        <label htmlFor={inputId} className={s.profileEdit}>
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
          id={inputId}
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
  inputId: PropTypes.string.isRequired,
  // labelFor: PropTypes.string.isRequired,
};
