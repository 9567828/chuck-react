function ProfilePage() {
  return (
    <div className="inner admin">
      <section className="edit-img-section">
        {/* 프로필 이미지 */}
        <div className="edit-img">
          <h1 className="edit-img-title">프로필 이미지</h1>
          <label htmlFor="editSymbolImg"></label>
          <input type="file" name="" id="editSymbolImg" className="edit-img-input" />
        </div>
      </section>

      {/* 정보 */}
      <section className="profile-wrap">
        <div className="detail-wrap">
          <h1>개인정보</h1>
          <div className="personal-info profile">
            <div className="info-item profile-name">
              <p>이름</p>
              <p>김지호</p>
            </div>
            <div className="info-item profile-email">
              <p>메일</p>
              <p>rlawlgh486@gmail.com</p>
            </div>
            <div className="info-item profile-tel">
              <p>전화번호</p>
              <p>-</p>
            </div>
            <div className="info-item profile-phone">
              <p>핸드폰번호</p>
              <p>010-9876-4321</p>
            </div>
            <div className="info-item profile-contract">
              <p>계약형태</p>
              <p>정규직</p>
            </div>
            <div className="info-item profile-birth">
              <p>생일</p>
              <p>1999년 9월 9일</p>
            </div>
          </div>
        </div>

        <div className="detail-wrap">
          <h1>조직</h1>
          <div className="personal-info dept">
            <div className="info-item dept-name">
              <p>부서</p>
              <p>디자인팀</p>
            </div>
            <div className="info-item duty">
              <p>직무</p>
              <p>BX 디자이너</p>
            </div>
          </div>
        </div>
        <button className="primary-btn profile-edit-btn">
          <span>수정하기</span>
        </button>
      </section>

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
    </div>
  );
}

export default ProfilePage;
