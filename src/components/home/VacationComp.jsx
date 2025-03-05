import * as s from "../../assets/scss/modules/style.module.scss";
import AvatarComponent from "../common/AvatarComponent";

function VacationComp() {
  const lists = [
    { id: 1, src: "/img/202301261737390.jpg", name: "최수종", date: "24.12.14~24.12.17" },
    { id: 1, src: "", name: "정연수", date: "24.12.14~24.12.17" },
    { id: 1, src: "", name: "이상호", date: "24.12.14~24.12.17" },
    { id: 1, src: "", name: "김여정", date: "24.12.14~24.12.17" },
    { id: 1, src: "", name: "박민우", date: "24.12.14~24.12.17" },
  ];
  return lists.length === 0 ? (
    <div className="empty-message">휴가 중인 인원이 없습니다.</div>
  ) : (
    <div className="card-wrap">
      {lists.map((item) => (
        <div className="contents-card vacation" key={item.id}>
          <div className="writer-name">
            <div className="avatar-wrap">
              <AvatarComponent img={item.src} src={item.src} name={item.name} />
            </div>
            <span className={`${s.captionXs} ${s.fontMedium}`}>{item.name}</span>
          </div>
          <div className={`write-date ${s.captionXs} ${s.fontRegular}`}>
            <p>{item.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default VacationComp;
