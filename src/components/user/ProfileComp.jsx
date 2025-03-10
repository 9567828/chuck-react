import "../../assets/scss/screen/user/profile.scss";
import styled from "styled-components";
import ProfileImgComp from "../common/ProfileImgComp";
import CustomMove from "./../hooks/CustomMove";
import TermsAgreeModal from "../modal/TermsAgreeModal";
import EditPasswordModal from "../modal/EditPasswordModal";
import { useState } from "react";

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
  const [isOnModal, setIsOnModal] = useState({
    marketing: false,
    editpassword: false,
  });
  const { moveToEditPage } = CustomMove();

  const empInfo = {
    name: "김지호",
    email: "rlawlgh486@gmail.com",
    number: "-",
    phoneNum: "010-9876-4321",
    contractType: "정규직",
    birth: "1999년 9월 9일",
    dept: "디자인팀",
    duty: "BX 디자이너",
    isMarketingAgree: true,
    imgPath: "/img/202301261737390.jpg",
  };

  const openModal = (item) => {
    setIsOnModal((prev) => ({
      ...prev,
      [item]: true,
    }));
  };

  const closeModal = () => {
    setIsOnModal({
      marketing: false,
      editpassword: false,
    });
  };
  return (
    <div className="inner admin">
      <ProfileImgComp title={"프로필 이미지"} existImg={empInfo.imgPath ? true : false} src={empInfo.imgPath} />

      {/* 정보 */}

      <ProfileContainer>
        <div>
          <H1>개인정보</H1>
          <ProfileWrap>
            <InfoWrap>
              <p>이름</p>
              <p>{empInfo.name}</p>
            </InfoWrap>
            <InfoWrap>
              <p>메일</p>
              <p>{empInfo.email}</p>
            </InfoWrap>
            <InfoWrap>
              <p>전화번호</p>
              <p>{empInfo.number}</p>
            </InfoWrap>
            <InfoWrap>
              <p>핸드폰번호</p>
              <p>{empInfo.phoneNum}</p>
            </InfoWrap>
            <InfoWrap>
              <p>계약형태</p>
              <p>{empInfo.contractType}</p>
            </InfoWrap>
            <InfoWrap>
              <p>생일</p>
              <p>{empInfo.birth}</p>
            </InfoWrap>
          </ProfileWrap>
        </div>

        <div>
          <H1>조직</H1>
          <ProfileWrap>
            <InfoWrap>
              <p>부서</p>
              <p>{empInfo.dept}</p>
            </InfoWrap>
            <InfoWrap>
              <p>직무</p>
              <p>{empInfo.duty}</p>
            </InfoWrap>
          </ProfileWrap>
        </div>
        <button onClick={() => moveToEditPage("/user/profile/edit", empInfo)} className="primary-btn small">
          <span>수정하기</span>
        </button>
      </ProfileContainer>

      <section className="terms-agree">
        <ul>
          <li onClick={() => openModal("marketing")}>마케팅 이용 • 수신 동의 변경하기</li>
          <li onClick={() => openModal("editpassword")}>비밀번호 변경하기</li>
          <li>회원 탈퇴하기</li>
        </ul>
      </section>
      {isOnModal.marketing ? <TermsAgreeModal closeModal={closeModal} checked={empInfo.isMarketingAgree} /> : <></>}
      {isOnModal.editpassword ? <EditPasswordModal closeModal={closeModal} /> : <></>}
    </div>
  );
}

export default ProfileComp;
