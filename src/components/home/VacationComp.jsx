import * as s from "../../assets/scss/modules/style.module.scss";

function VacationComp() {
  return (
    <div className="card-wrap">
      <div className="contents-card vacation">
        <div className="writer-name">
          <div className="avatar-wrap">
            <img src="/img/202301261737390.jpg" alt="" className="avatar" />
            <span className="first-name">최</span>
          </div>
          <span className={`${s.captionXs} ${s.fontMedium}`}>최수종</span>
        </div>
        <div className={`write-date ${s.captionXs} ${s.fontRegular}`}>
          <p>24.12.14~24.12.17</p>
        </div>
      </div>
      {/* <div className="empty-message">휴가 중인 인원이 없습니다.</div> */}
    </div>
  );
}

export default VacationComp;
