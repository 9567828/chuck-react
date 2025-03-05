import { Link } from "react-router";
import "../../assets/scss/screen/home/electric.scss";
import * as s from "../../assets/scss/modules/style.module.scss";
import { EmptyMessage } from "./../common/StyledComponent";
import AvatarComponent from "../common/AvatarComponent";

function ElectricListComponent() {
  const lists = [
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

  return (
    <div className="dashboard-box electric">
      <div className="title-bar">
        <div className="title-left">
          <img src="/img/main-icons/ic_fill_electric.svg" alt="전자결재아이콘" />
          <h1 className={`${s.bodyMd} ${s.fontBold}`}>전자결재</h1>
          <p className={`${s.captionXxs} ${s.fontMedium} check-electric`}>확인하지 않은 결재 (7)</p>
        </div>
        <Link to="" className="show-all">
          전체보기
        </Link>
      </div>
      {lists.length !== 0 ? (
        <div className="card-wrap">
          {lists.map((item) => (
            <div className="electric-card" key={item.id}>
              <p className={`list-title ${s.captionXs} ${s.fontBold}`}>{item.title}</p>
              <div className="list-right">
                <div className="writer-info">
                  <p className={`${s.captionXs} ${s.fontRegular}`}>{item.date}</p>
                  <div className="writer-name">
                    <div className="avatar-wrap">
                      <AvatarComponent img={item.src} src={item.src} name={item.name} />
                    </div>
                    <span className={`${s.captionXs} ${s.fontMedium}`}>{item.name}</span>
                  </div>
                </div>
                <Link to="" className={`show-detail ${s.captionXxs} ${s.fontMedium}`}>
                  자세히 보기 &gt;
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <EmptyMessage>진행중인 결재가 없습니다.</EmptyMessage>
      )}
    </div>
  );
}

export default ElectricListComponent;
