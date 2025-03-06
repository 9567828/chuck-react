import { Link } from "react-router";
import * as s from "../assets/scss/modules/style.module.scss";
import "../assets/scss/screen/home/home.scss";
import ElectricListComponent from "./home/ElectricListComponent";
import Calender from "./common/Calender";
import ScheduleListComp from "./home/ScheduleListComp";
import NoticeComp from "./home/NoticeComp";
import VacationComp from "./home/VacationComp";
import DateFormatter from "./hooks/MakeDate";
import { useEffect, useState } from "react";

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
        <div className="dashboard-box electric">
          <div className="title-bar">
            <div className="title-left">
              <img src="/img/main-icons/ic_fill_electric.svg" alt="전자결재아이콘" />
              <h1 className={`${s.bodyMdB}`}>전자결재</h1>
              <p className={`${s.captionXxsM} ${s.redFont}`}>확인하지 않은 결재 (7)</p>
            </div>
            <Link to="" className="show-all">
              전체보기
            </Link>
          </div>
          <ElectricListComponent />
        </div>

        {/* 스케줄 */}
        <div className="dashboard-box schedule">
          <div className="title-bar">
            <div className="title-left">
              <img src="/img/main-icons/ic_fill_calender.svg" alt="스케줄" />
              <h1 className={`${s.bodyMdB}`}>스케줄</h1>
            </div>
            <Link to="" className="show-all">
              전체보기
            </Link>
          </div>
          <div className="schedule-container">
            {/* 달력 */}
            <Calender />
            <ScheduleListComp />
          </div>
        </div>

        {/* 공지사항 */}
        <div className="dashboard-box white notice">
          <div className="title-bar">
            <div className="title-left">
              <img src="/img/main-icons/ic_fill_notice.svg" alt="공지사항" />
              <h1 className={`${s.bodyMdB}`}>공지사항</h1>
            </div>
            <Link to="" className="show-all">
              전체보기
            </Link>
          </div>
          <NoticeComp />
        </div>
        {/* 출퇴근 및 휴가현황 */}
        <div className="status-container">
          {/* 출퇴근관리 */}
          <div className="dashboard-box white attendance">
            <div className="title-bar">
              <div className="title-left">
                <img src="/img/main-icons/ic_attendance.svg" alt="출퇴근" />
                <h1 className={`${s.bodyMdB}`}>출퇴근 관리</h1>
              </div>
            </div>
            <div className="timer">
              <div className={`${s.captionXsM} ${s.gray700Font}`}>{updateDate.dateWithDay}</div>
              <div className={`${s.displayB}`}>{updateDate.hours}</div>
              <div className={`${s.bodySmM} ${s.gray700Font}`}>퇴근 완료</div>
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
                <h1 className={`${s.bodyMdB}`}>휴가 현황</h1>
              </div>
              <Link to="" className="show-all">
                전체보기
              </Link>
            </div>
            <VacationComp />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
