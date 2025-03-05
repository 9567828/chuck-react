import * as s from "../../assets/scss/modules/style.module.scss";

const NoticeComp = () => {
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
  return lists.map((item) => (
    <div className="contents-card" key={item.id}>
      <div className={`list-title ${s.captionXs} ${s.fontBold}`}>{item.title}</div>
      <div className={`write-date ${s.captionXs} ${s.fontRegular}`}>
        <p>{item.date}</p>
      </div>
    </div>
  ));
};

export default NoticeComp;
