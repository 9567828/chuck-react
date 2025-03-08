import "../../assets/scss/screen/user/profile.scss";
import styled from "styled-components";
import ProfileImgComp from "../common/ProfileImgComp";
import { useState } from "react";
import ProfileEditComp from "./ProfileEditComp";

const ProfileContainer = styled.section`
  margin-bottom: 48px;
`;

const H1 = styled.h1`
  font-size: 16px;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: -0.02em;
`;

const ProfileWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 16px 0 24px;
`;

const InfoWrap = styled.div`
  display: grid;
  grid-template-columns: 65px 1fr;
  align-items: center;
  gap: 60px;
  font-size: 14px;
  font-weight: 500;
  color: #757575;
`;

function ProfileComp() {
  const [clickEdit, setClickEdit] = useState(false);

  const handleClickEdit = () => {
    setClickEdit(true);
  };

  const imgPath = "/img/202301261737390.jpg";
  return (
    <div className="inner admin">
      <ProfileImgComp title={"프로필 이미지"} isEdit={clickEdit} existImg={true} src={imgPath} />

      {/* 정보 */}
      {clickEdit ? (
        <ProfileEditComp empName={"김지호"} empNumber={"02-123-4567"} empPhone={"010-1234-5678"} />
      ) : (
        <>
          <ProfileContainer>
            <div>
              <H1>개인정보</H1>
              <ProfileWrap>
                <InfoWrap>
                  <p>이름</p>
                  <p>김지호</p>
                </InfoWrap>
                <InfoWrap>
                  <p>메일</p>
                  <p>rlawlgh486@gmail.com</p>
                </InfoWrap>
                <InfoWrap>
                  <p>전화번호</p>
                  <p>-</p>
                </InfoWrap>
                <InfoWrap>
                  <p>핸드폰번호</p>
                  <p>010-9876-4321</p>
                </InfoWrap>
                <InfoWrap>
                  <p>계약형태</p>
                  <p>정규직</p>
                </InfoWrap>
                <InfoWrap>
                  <p>생일</p>
                  <p>1999년 9월 9일</p>
                </InfoWrap>
              </ProfileWrap>
            </div>

            <div>
              <H1>조직</H1>
              <ProfileWrap>
                <InfoWrap>
                  <p>부서</p>
                  <p>디자인팀</p>
                </InfoWrap>
                <InfoWrap>
                  <p>직무</p>
                  <p>BX 디자이너</p>
                </InfoWrap>
              </ProfileWrap>
            </div>
            <button onClick={handleClickEdit} className="primary-btn small">
              <span>수정하기</span>
            </button>
          </ProfileContainer>

          <section className="terms-agree">
            <ul>
              <li>
                <span>마케팅 이용 • 수신 동의 변경하기</span>
              </li>
              <li>
                <span>비밀번호 변경하기</span>
              </li>
              <li>
                <span>회원 탈퇴하기</span>
              </li>
            </ul>
          </section>
        </>
      )}
    </div>
  );
}

export default ProfileComp;
