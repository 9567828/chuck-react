import * as s from "../../assets/scss/modules/style.module.scss";
import { Link } from "react-router";

function NoticeComp() {
  const lists = [
    {
      id: 1,
      title:
        "최대 표시 글자 확인용 최대 표시 글자 확인용 최대 표시 글자 확인용 최대 표시 글자 확인용 최대 표시 글자 확인용 최대 표시글자 확인용 최대 표시 글자 확인용 최대 표시 글자 확인용",
      date: "2024.12.24(금) 09:42",
    },
    {
      id: 2,
      title:
        "최대 표시 글자 확인용 최대 표시 글자 확인용 최대 표시 글자 확인용 최대 표시 글자 확인용 최대 표시 글자 확인용 최대 표시글자 확인용 최대 표시 글자 확인용 최대 표시 글자 확인용",
      date: "2024.12.24(금) 09:42",
    },
    {
      id: 3,
      title:
        "최대 표시 글자 확인용 최대 표시 글자 확인용 최대 표시 글자 확인용 최대 표시 글자 확인용 최대 표시 글자 확인용 최대 표시글자 확인용 최대 표시 글자 확인용 최대 표시 글자 확인용",
      date: "2024.12.24(금) 09:42",
    },
    {
      id: 4,
      title:
        "최대 표시 글자 확인용 최대 표시 글자 확인용 최대 표시 글자 확인용 최대 표시 글자 확인용 최대 표시 글자 확인용 최대 표시글자 확인용 최대 표시 글자 확인용 최대 표시 글자 확인용",
      date: "2024.12.24(금) 09:42",
    },
  ];
  return (
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
      {lists.map((item) => (
        <div className="contents-card" key={item.id}>
          <div className={`list-title ${s.captionXs} ${s.fontBold}`}>{item.title}</div>
          <div className={`write-date ${s.captionXs} ${s.fontRegular}`}>
            <p>{item.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NoticeComp;
