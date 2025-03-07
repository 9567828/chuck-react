function CompanyInfo() {
  return (
    <div className="inner admin">
      <section className="edit-img-section">
        {/* 회사대표 */}
        <div className="edit-img">
          <h1 className="edit-img-title">회사 대표 이미지</h1>
          <form id="symbolForm" className="">
            <label htmlFor="editSymbolImg"></label>
            <input type="file" name="" id="editSymbolImg" className="edit-img-input" />
            <div className="btn-wrap">
              <button className="sub-btn-flexible">수정하기</button>
              <input type="reset" className="sub-btn-flexible cancel" value="삭제" />
            </div>
          </form>
        </div>

        {/* 회사로고 */}
        <div className="edit-img">
          <h1 className="edit-img-title">회사 로고 이미지</h1>
          <form id="logoForm" className="">
            <label htmlFor="editLogoImg"></label>
            <input type="file" name="" id="editLogoImg" className="edit-img-input" />
            <div className="btn-wrap">
              <button className="sub-btn-flexible">수정하기</button>
              <input type="reset" className="sub-btn-flexible cancel" value="삭제" />
            </div>
          </form>
        </div>
      </section>

      {/* 정보 수정 */}
      <section className="edit-info-wrap">
        <div className="co-name-wrap">
          <label htmlFor="coName">회사명</label>
          <input type="text" name="" id="coName" className="input-box small" placeholder="ex) ChuckChuck" />
        </div>
        <div className="co-intro-wrap">
          <label htmlFor="coIntro">회사 소개</label>
          <input type="text" name="" id="coIntro" className="input-box small" placeholder="ex) Chuck Chuck은 무엇이든 척척" />
        </div>
        <div className="co-addr-wrap">
          <label htmlFor="coAddr">회사 주소</label>
          <input type="text" name="" id="coAddr" className="input-box small" placeholder="시/구/동/길" />
        </div>
        <div className="co-number-wrap">
          <label htmlFor="coNumber">회사 번호</label>
          <input type="text" name="" id="coNumber" className="input-box small" placeholder="ex) 02-123-1234" />
        </div>
      </section>
    </div>
  );
}

export default CompanyInfo;
