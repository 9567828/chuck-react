import { Link } from "react-router";
import * as s from "../assets/scss/modules/style.module.scss";
import ElectricListComponent from "./home/ElectricListComponent";
import DateFormatter from "./hooks/MakeDate";
import { useEffect, useState } from "react";
import Calender from "./common/Calender";

function Home() {
  const date = new DateFormatter();
  const [updateDate, setUpdateDate] = useState(date);

  useEffect(() => {
    const interValId = setInterval(() => {
      setUpdateDate(new DateFormatter());
    }, 1000);
    return () => clearInterval(interValId);
  }, []);

  return (
    <div className="inner">
      <div id="main-container">
        {/* 전자결재 */}
        <ElectricListComponent />

        {/* 스케줄 */}
        <div className="dashboard-box schedule">
          <div className="title-bar">
            <div className="title-left">
              <img src="/img/main-icons/ic_fill_calender.svg" alt="스케줄" />
              <h1 className={`${s.bodyMd} ${s.fontBold}`}>스케줄</h1>
            </div>
            <Link to="" className="show-all">
              전체보기
            </Link>
          </div>
          <div className="schedule-container">
            {/* 달력 */}
            <Calender />
            <div className="schedule-list">
              <div className="schedule-content">
                <div className={`schedule-header ${s.captionXs} ${s.fontBold}`}>12월 9일</div>
                <div className="content-list">
                  <p className={`schedule-time ${s.captionXxs}`}>12:00</p>
                  <div className="cal-color"></div>
                  <p className={`cal-title ${s.captionXs}`}>BX팀 외부 미팅</p>
                </div>
                <div className="content-list">
                  <p className={`schedule-time ${s.captionXxs}`}>14:30</p>
                  <div className="cal-color" style={{ backgroundColor: "#6E17FF" }}></div>
                  <p className="cal-title caption-xs">박팀장님과 점심 약속</p>
                </div>
              </div>
              <div className="schedule-content">
                <div className={`schedule-header ${s.captionXs} ${s.fontBold}`}>12월 10일</div>
                <div className="content-list">
                  <p className={`schedule-time ${s.captionXxs}`}>등록된 일정이 없습니다.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 공지사항 */}
        <div className="dashboard-box white">
          <div className="title-bar">
            <div className="title-left">
              <img src="/img/main-icons/ic_fill_notice.svg" alt="공지사항" />
              <h1 className={`${s.bodyMd} ${s.fontBold}`}>공지사항</h1>
            </div>
            <Link to="" className="show-all">
              전체보기
            </Link>
          </div>
          <div className="contents-card">
            <div className={`list-title ${s.captionXs} ${s.fontBold}`}>
              최대 표시 글자 확인용 최대 표시 글자 확인용 최대 표시 글자 확인용 최대 표시 글자 확인용 최대 표시 글자 확인용 최대
              표시 글자 확인용 최대 표시 글자 확인용 최대 표시 글자 확인용
            </div>
            <div className={`write-date ${s.captionXs} ${s.fontRegular}`}>
              <p>2024.12.24(금) 09:42</p>
            </div>
          </div>
          <div className="contents-card">
            <div className={`list-title ${s.captionXs} ${s.fontBold}`}>
              최대 표시 글자 확인용 최대 표시 글자 확인용 최대 표시 글자 확인용 최대 표시 글자 확인용 최대 표시 글자 확인용 최대
              표시 글자 확인용 최대 표시 글자 확인용 최대 표시 글자 확인용
            </div>
            <div className={`write-date ${s.captionXs} ${s.fontRegular}`}>
              <p>2024.12.24(금) 09:42</p>
            </div>
          </div>
          <div className="contents-card">
            <div className={`list-title ${s.captionXs} ${s.fontBold}`}>
              최대 표시 글자 확인용 최대 표시 글자 확인용 최대 표시 글자 확인용 최대 표시 글자 확인용 최대 표시 글자 확인용 최대
              표시 글자 확인용 최대 표시 글자 확인용 최대 표시 글자 확인용
            </div>
            <div className={`write-date ${s.captionXs} ${s.fontRegular}`}>
              <p>2024.12.24(금) 09:42</p>
            </div>
          </div>
          <div className="contents-card">
            <div className={`list-title ${s.captionXs} ${s.fontBold}`}>
              최대 표시 글자 확인용 최대 표시 글자 확인용 최대 표시 글자 확인용 최대 표시 글자 확인용 최대 표시 글자 확인용 최대
              표시 글자 확인용 최대 표시 글자 확인용 최대 표시 글자 확인용
            </div>
            <div className={`write-date ${s.captionXs} ${s.fontRegular}`}>
              <p>2024.12.24(금) 09:42</p>
            </div>
          </div>
        </div>

        {/* 출퇴근 및 휴가현황 */}
        <div className="status-container">
          {/* 출퇴근관리 */}
          <div className="dashboard-box white attendance">
            <div className="title-bar">
              <div className="title-left">
                <img src="/img/main-icons/ic_attendance.svg" alt="출퇴근" />
                <h1 className={`${s.bodyMd} ${s.fontBold}`}>출퇴근 관리</h1>
              </div>
            </div>
            <div className="timer">
              <div className={`today ${s.captionXs}`}>{updateDate.dateWithDay}</div>
              <div className={`current-time ${s.display} ${s.fontBold}`}>{updateDate.hours}</div>
              <div className={`status-attendance ${s.bodySm}`}>퇴근 완료</div>
            </div>
            <button className="primary-btn punch-in">
              <span>출근하기</span>
            </button>
          </div>

          {/* 휴가현황 */}
          <div className="dashboard-box white vacation">
            <div className="title-bar">
              <div className="title-left">
                <img src="/img/main-icons/ic_vacation.svg" alt="휴가" />
                <h1 className={`${s.bodyMd} ${s.fontBold}`}>휴가 현황</h1>
              </div>
              <Link to="" className="show-all">
                전체보기
              </Link>
            </div>
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
            </div>
            {/* <div className="empty-message">휴가 중인 인원이 없습니다.</div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
