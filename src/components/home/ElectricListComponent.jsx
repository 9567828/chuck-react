import { Link } from "react-router";
import "../../assets/scss/screen/home/electric.scss";
import * as s from "../../assets/scss/modules/style.module.scss";
import { EmptyMessage } from "./../common/StyledComponent";
import AvatarComponent from "../common/AvatarComponent";

function ElectricListComponent() {
  const electricLists = [
    {
      id: 1,
      title:
        "최대 표시 글자 확인용 최대 표시 글자 확인용 최대 표시 글자 확인용 최대 표시 글자 확인용 최대 표시 글자 확인용 최대표시 글자 확인용 최대 표시 글자 확인용 최대 표시 글자 확인용",
      date: "2024.12.24(금) 09:42",
      name: "김지훈",
      src: "/img/202301261737390.jpg",
    },
    {
      id: 2,
      title:
        "최대 표시 글자 확인용 최대 표시 글자 확인용 최대 표시 글자 확인용 최대 표시 글자 확인용 최대 표시 글자 확인용 최대표시 글자 확인용 최대 표시 글자 확인용 최대 표시 글자 확인용",
      date: "2024.12.24(금) 09:42",
      name: "김지훈",
    },
    {
      id: 3,
      title:
        "최대 표시 글자 확인용 최대 표시 글자 확인용 최대 표시 글자 확인용 최대 표시 글자 확인용 최대 표시 글자 확인용 최대표시 글자 확인용 최대 표시 글자 확인용 최대 표시 글자 확인용",
      date: "2024.12.24(금) 09:42",
      name: "김지훈",
    },
    {
      id: 4,
      title:
        "최대 표시 글자 확인용 최대 표시 글자 확인용 최대 표시 글자 확인용 최대 표시 글자 확인용 최대 표시 글자 확인용 최대표시 글자 확인용 최대 표시 글자 확인용 최대 표시 글자 확인용",
      date: "2024.12.24(금) 09:42",
      name: "김지훈",
    },
    {
      id: 5,
      title:
        "최대 표시 글자 확인용 최대 표시 글자 확인용 최대 표시 글자 확인용 최대 표시 글자 확인용 최대 표시 글자 확인용 최대표시 글자 확인용 최대 표시 글자 확인용 최대 표시 글자 확인용",
      date: "2024.12.24(금) 09:42",
      name: "김지훈",
    },
  ];

  return electricLists.length !== 0 ? (
    <EmptyMessage>진행중인 결재가 없습니다.</EmptyMessage>
  ) : (
    <div className="card-wrap">
      {electricLists.map((item) => (
        <div className="electric-card" key={item.id}>
          <p className={`list-title ${s.captionXsB}`}>{item.title}</p>
          <div className="list-right">
            <div className="writer-info">
              <p className={`${s.captionXsR}`}>{item.date}</p>
              <div className="writer-name">
                <div className="avatar-wrap">
                  <AvatarComponent img={item.src} src={item.src} name={item.name} />
                </div>
                <span className={`${s.captionXsM}`}>{item.name}</span>
              </div>
            </div>
            <Link to="" className={`show-detail ${s.captionXxsM}`}>
              자세히 보기 &gt;
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ElectricListComponent;
