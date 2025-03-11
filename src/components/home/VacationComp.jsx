import * as s from "../../assets/scss/modules/style.module.scss";
import "../../assets/scss/screen/home/vacation.scss";
import AvatarComponent from "../common/AvatarComponent";
import { EmptyMessage } from "../common/StyledComponent";
import styled from "styled-components";

const List = styled.div`
  width: 100%;
  min-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 14px;
  background-color: #ffffff;
  border-bottom: 1px solid #eeeeee;
  &:last-child {
    border-bottom: 0;
  }
  .vacation {
    padding: 0;
  }
`;

function VacationComp() {
  const vationLists = [
    { id: 1, src: "/img/202301261737390.jpg", name: "최수종", date: "24.12.14~24.12.17" },
    { id: 2, src: "", name: "정연수", date: "24.12.14~24.12.17" },
    { id: 3, src: "", name: "이상호", date: "24.12.14~24.12.17" },
    { id: 4, src: "", name: "김여정", date: "24.12.14~24.12.17" },
    { id: 5, src: "", name: "박민우", date: "24.12.14~24.12.17" },
  ];
  return vationLists.length === 0 ? (
    <EmptyMessage>휴가 중인 인원이 없습니다.</EmptyMessage>
  ) : (
    <div className="card-wrap">
      {vationLists.map((item) => (
        <List key={item.id}>
          <div className="writer-name vacation">
            <div className="avatar-wrap">
              <AvatarComponent img={item.src} src={item.src} name={item.name} />
            </div>
            <span className={`${s.captionXsM}`}>{item.name}</span>
          </div>
          <div className={`write-date ${s.captionXsR}`}>
            <p>{item.date}</p>
          </div>
        </List>
      ))}
    </div>
  );
}

export default VacationComp;
