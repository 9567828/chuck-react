import styled from "styled-components";
import * as s from "../../assets/scss/modules/style.module.scss";
import ProfileEditImgComp from "../common/ProfileImgEditComp";
import { useNavigate, useLocation } from "react-router";

const Div = styled.div`
  margin: 32px 0;
`;

const Label = styled.label`
  display: block;
  width: fit-content;
  margin-bottom: 6px;
  padding-left: 4px;
`;

function ProfileEditComp() {
  const navigate = useNavigate();
  const location = useLocation();

  const empInfo = location.state?.value;

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="inner admin">
      <ProfileEditImgComp title={"프로필 이미지"} currentImg={empInfo.imgPath} />
      <Div className={s.editInfoWrap}>
        <div>
          <Label htmlFor="empName" className={s.bodySmB}>
            이름
          </Label>
          <input type="text" name="" id="empName" className=".input-box-medium" placeholder={empInfo.name} />
        </div>
        <div>
          <Label htmlFor="empNumber" className={s.bodySmB}>
            전화번호
          </Label>
          <input type="text" name="" id="empNumber" className=".input-box-medium" placeholder={empInfo.number} />
        </div>
        <div>
          <Label htmlFor="empPhone" className={s.bodySmB}>
            핸드폰 번호
          </Label>
          <input type="text" name="" id="empPhone" className=".input-box-medium" placeholder={empInfo.phoneNum} />
        </div>
      </Div>
      <div className={s.btnWrap}>
        <button className="primary-btn small">저장하기</button>
        <button onClick={handleGoBack} className="primary-btn small cancel">
          취소
        </button>
      </div>
    </div>
  );
}

export default ProfileEditComp;
