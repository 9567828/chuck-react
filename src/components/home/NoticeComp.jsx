import * as s from "../../assets/scss/modules/style.module.scss";
import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const List = styled.div`
  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: minmax(475px, 1fr) auto;
  justify-content: space-between;
  align-items: center;
  column-gap: 12px;
  padding: 22px 14px;
  background-color: #ffffff;
  border-bottom: 1px solid #eeeeee;
  &:last-child {
    border: 0;
    padding-bottom: 12px;
  }
`;

const NoticeComp = () => {
  const noticeLists = [
    {
      id: 1,
      title:
        "최대 표시 글자 확인용 최대 표시 글자 확인용 최대 표시 글자 확인용 최대 표시 글자 확인용 최대 표시 글자 확인용 최대 표시글자 확인용 최대 표시 글자 확인용 최대 표시 글자 확인용",
      date: "2024.12.24(금) 09:42",
    },
    {
      id: 2,
      title: "전재결재 서류 양식 배포",
      date: "2024.12.24(금) 09:42",
    },
    {
      id: 3,
      title: "1층 화장실 임시 통제 안내",
      date: "2024.12.24(금) 09:42",
    },
  ];
  return (
    <Flex>
      {noticeLists.map((item) => (
        <List key={item.id}>
          <div className={`list-title ${s.captionXsB}`}>{item.title}</div>
          <div className={s.captionXsR}>
            <p>{item.date}</p>
          </div>
        </List>
      ))}
    </Flex>
  );
};

export default NoticeComp;
