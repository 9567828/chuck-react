import * as s from "../../assets/scss/modules/style.module.scss";
import styled from "styled-components";
import ProfileEditImgComp from "./../common/ProfileImgEditComp";

const ImgSection = styled.section`
  display: flex;
  align-items: center;
  gap: 40px;
  margin-bottom: 40px;
`;

const Label = styled.label`
  display: block;
  width: fit-content;
  margin-bottom: 6px;
  padding-left: 4px;
`;

function CompanyInfo() {
  return (
    <div className="inner admin">
      <ImgSection>
        {/* 회사대표 */}
        <ProfileEditImgComp title={"회사 대표 이미지"} />

        {/* 회사로고 */}
        <ProfileEditImgComp title={"회사 로고 이미지"} />
      </ImgSection>

      {/* 정보 수정 */}
      <section className={s.editInfoWrap}>
        <div>
          <Label htmlFor="coName" className={s.bodySmB}>
            회사명
          </Label>
          <input type="text" name="" id="coName" className=".input-box-medium" placeholder="ex) ChuckChuck" />
        </div>
        <div>
          <Label htmlFor="coIntro" className={s.bodySmB}>
            회사 소개
          </Label>
          <input type="text" name="" id="coIntro" className=".input-box-medium" placeholder="ex) Chuck Chuck은 무엇이든 척척" />
        </div>
        <div>
          <Label htmlFor="coAddr" className={s.bodySmB}>
            회사 주소
          </Label>
          <input type="text" name="" id="coAddr" className=".input-box-medium" placeholder="시/구/동/길" />
        </div>
        <div>
          <Label htmlFor="coNumber" className={s.bodySmB}>
            회사 번호
          </Label>
          <input type="text" name="" id="coNumber" className=".input-box-medium" placeholder="ex) 02-123-1234" />
        </div>
      </section>
    </div>
  );
}

export default CompanyInfo;
