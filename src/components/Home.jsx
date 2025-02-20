import { Link } from "react-router";
import style from "../assets/scss/modules/style.module.scss";

function Home() {
  return (
    <div className="inner">
      <div id="main-container">
        {/* 전자결재 */}
        <div className="dashboard-box electric">
          <div className="title-bar">
            <div className="title-left">
              <img src="/img/main-icons/ic_fill_electric.svg" alt="전자결재아이콘" />
              <h1 className={`${style.bodyMd} ${style.fontBold}`}>전자결재</h1>
              <p className="caption-xxs font-medium check-electric">확인하지 않은 결재 (7)</p>
            </div>
            <Link to="" className="show-all">
              전체보기
            </Link>
          </div>
          <div className="card-wrap">
            <div className="electric-card">
              <p className="list-title caption-xs font-bold">
                최대 표시 글자 확인용 최대 표시 글자 확인용 최대 표시 글자 확인용 최대 표시 글자 확인용 최대 표시 글자 확인용 최대
                표시 글자 확인용 최대 표시 글자 확인용 최대 표시 글자 확인용
              </p>
              <div className="list-right">
                <div className="writer-info">
                  <p className={`${style.captionXs} ${style.fontRegular}`}>2024.12.24(금) 09:42</p>
                  <div className="writer-name">
                    <div className="avatar-wrap">
                      <img src="/img/202301261737390.jpg" alt="" className="avatar" />
                      <span className="first-name">김</span>
                    </div>
                    <span className={`${style.captionXs} ${style.fontMedium}`}>김지훈</span>
                  </div>
                </div>
                <Link to="" className={`show-detail ${style.captionXxs} ${style.fontMedium}`}>
                  자세히 보기 &gt;
                </Link>
              </div>
            </div>
            <div className="electric-card">
              <p className={`list-title ${style.captionXs} ${style.fontBold}`}>
                최대 표시 글자 확인용 최대 표시 글자 확인용 최대 표시 글자 확인용 최대 표시 글자 확인용 최대 표시 글자 확인용 최대
                표시 글자 확인용 최대 표시 글자 확인용 최대 표시 글자 확인용
              </p>
              <div className="list-right">
                <div className="writer-info">
                  <p className={`${style.captionXs} ${style.fontRegular}`}>2024.12.24(금) 09:42</p>
                  <div className="writer-name">
                    <div className="avatar-wrap">
                      <img src="/img/202301261737390.jpg" alt="" className="avatar" />
                      <span className="first-name">김</span>
                    </div>
                    <span className={`${style.captionXs} ${style.fontMedium}`}>김지훈</span>
                  </div>
                </div>
                <Link to="" className={`show-detail ${style.captionXxs} ${style.fontMedium}`}>
                  자세히 보기 &gt;
                </Link>
              </div>
            </div>
            <div className="electric-card">
              <p className={`list-title ${style.captionXs} ${style.fontMedium}`}>
                최대 표시 글자 확인용 최대 표시 글자 확인용 최대 표시 글자 확인용 최대 표시 글자 확인용 최대 표시 글자 확인용 최대
                표시 글자 확인용 최대 표시 글자 확인용 최대 표시 글자 확인용
              </p>
              <div className="list-right">
                <div className="writer-info">
                  <p className={`${style.captionXs} ${style.fontRegular}`}>2024.12.24(금) 09:42</p>
                  <div className="writer-name">
                    <div className="avatar-wrap">
                      <img src="/img/202301261737390.jpg" alt="" className="avatar" />
                      <span className="first-name">김</span>
                    </div>
                    <span className={`${style.captionXs} ${style.fontMedium}`}>김지훈</span>
                  </div>
                </div>
                <Link to="" className={`show-detail ${style.captionXxs} ${style.fontMedium}`}>
                  자세히 보기 &gt;
                </Link>
              </div>
            </div>
            <div className="electric-card">
              <p className={`list-title ${style.captionXs} ${style.fontBold}`}>
                최대 표시 글자 확인용 최대 표시 글자 확인용 최대 표시 글자 확인용 최대 표시 글자 확인용 최대 표시 글자 확인용 최대
                표시 글자 확인용 최대 표시 글자 확인용 최대 표시 글자 확인용
              </p>
              <div className="list-right">
                <div className="writer-info">
                  <p className={`${style.captionXs} ${style.fontRegular}`}>2024.12.24(금) 09:42</p>
                  <div className="writer-name">
                    <div className="avatar-wrap">
                      <img src="/img/202301261737390.jpg" alt="" className="avatar" />
                      <span className="first-name">김</span>
                    </div>
                    <span className={`${style.captionXs} ${style.fontMedium}`}>김지훈</span>
                  </div>
                </div>
                <Link to="" className={`show-detail ${style.captionXxs} ${style.fontMedium}`}>
                  자세히 보기 &gt;
                </Link>
              </div>
            </div>
            <div className="electric-card">
              <p className={`list-title ${style.captionXs} ${style.fontBold}`}>
                최대 표시 글자 확인용 최대 표시 글자 확인용 최대 표시 글자 확인용 최대 표시 글자 확인용 최대 표시 글자 확인용 최대
                표시 글자 확인용 최대 표시 글자 확인용 최대 표시 글자 확인용
              </p>
              <div className="list-right">
                <div className="writer-info">
                  <p className={`${style.captionXs} ${style.fontRegular}`}>2024.12.24(금) 09:42</p>
                  <div className="writer-name">
                    <div className="avatar-wrap">
                      <img src="/img/202301261737390.jpg" alt="" className="avatar" />
                      <span className="first-name">김</span>
                    </div>
                    <span className={`${style.captionXs} ${style.fontMedium}`}>김지훈</span>
                  </div>
                </div>
                <Link to="" className="show-detail caption-xxs font-medium">
                  자세히 보기 &gt;
                </Link>
              </div>
            </div>
          </div>
          {/* <div className="empty-message">진행중인 결재가 없습니다.</div> */}
        </div>

        {/* 스케줄 */}
        <div className="dashboard-box schedule">
          <div className="title-bar">
            <div className="title-left">
              <img src="/img/main-icons/ic_fill_calender.svg" alt="스케줄" />
              <h1 className="body-md font-bold">스케줄</h1>
            </div>
            <Link to="" className="show-all">
              전체보기
            </Link>
          </div>
          <div className="schedule-container">
            {/* 달력 */}
            {/* <th:block th:insert="~{common/fragments/calender :: calenderFragment}"></th:block> */}
            <div className="schedule-list">
              <div className="schedule-content">
                <div className="schedule-header caption-xs font-bold">12월 9일</div>
                <div className="content-list">
                  <p className="schedule-time caption-xxs">12:00</p>
                  <div className="cal-color"></div>
                  <p className="cal-title caption-xs">BX팀 외부 미팅</p>
                </div>
                <div className="content-list">
                  <p className="schedule-time caption-xxs">14:30</p>
                  <div className="cal-color" style={{ backgroundColor: "#6E17FF" }}></div>
                  <p className="cal-title caption-xs">박팀장님과 점심 약속</p>
                </div>
              </div>
              <div className="schedule-content">
                <div className="schedule-header caption-xs font-bold">12월 10일</div>
                <div className="content-list">
                  <p className="schedule-time caption-xxs">등록된 일정이 없습니다.</p>
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
              <h1 className="body-md font-bold">공지사항</h1>
            </div>
            <Link to="" className="show-all">
              전체보기
            </Link>
          </div>
          <div className="contents-card">
            <div className="list-title caption-xs font-bold">
              최대 표시 글자 확인용 최대 표시 글자 확인용 최대 표시 글자 확인용 최대 표시 글자 확인용 최대 표시 글자 확인용 최대
              표시 글자 확인용 최대 표시 글자 확인용 최대 표시 글자 확인용
            </div>
            <div className="write-date caption-xs font-regular">
              <p>2024.12.24(금) 09:42</p>
            </div>
          </div>
          <div className="contents-card">
            <div className="list-title caption-xs font-bold">
              최대 표시 글자 확인용 최대 표시 글자 확인용 최대 표시 글자 확인용 최대 표시 글자 확인용 최대 표시 글자 확인용 최대
              표시 글자 확인용 최대 표시 글자 확인용 최대 표시 글자 확인용
            </div>
            <div className="write-date caption-xs font-regular">
              <p>2024.12.24(금) 09:42</p>
            </div>
          </div>
          <div className="contents-card">
            <div className="list-title caption-xs font-bold">
              최대 표시 글자 확인용 최대 표시 글자 확인용 최대 표시 글자 확인용 최대 표시 글자 확인용 최대 표시 글자 확인용 최대
              표시 글자 확인용 최대 표시 글자 확인용 최대 표시 글자 확인용
            </div>
            <div className="write-date caption-xs font-regular">
              <p>2024.12.24(금) 09:42</p>
            </div>
          </div>
          <div className="contents-card">
            <div className="list-title caption-xs font-bold">
              최대 표시 글자 확인용 최대 표시 글자 확인용 최대 표시 글자 확인용 최대 표시 글자 확인용 최대 표시 글자 확인용 최대
              표시 글자 확인용 최대 표시 글자 확인용 최대 표시 글자 확인용
            </div>
            <div className="write-date caption-xs font-regular">
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
                <h1 className="body-md font-bold">출퇴근 관리</h1>
              </div>
            </div>
            <div className="timer">
              <div className="today caption-xs"></div>
              <div className="current-time display font-bold"></div>
              <div className="status-attendance body-sm">퇴근 완료</div>
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
                <h1 className="body-md font-bold">휴가 현황</h1>
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
                  <span className="caption-xs font-medium">최수종</span>
                </div>
                <div className="write-date caption-xs font-regular">
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
