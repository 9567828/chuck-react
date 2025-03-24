import * as s from "../../assets/scss/modules/style.module.scss";
import styled from "styled-components";
import PropTypes from "prop-types";

const TitleHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  color: #9e9e9e;
`;

const ContentInfo = styled.div`
  width: 216px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const P = styled.p`
  margin-top: 8px;
  color: #9e9e9e;
`;
const Footer = styled.div`
  height: 10px;
`;

function AlamModal({ closeFn }) {
  const alarmList = [
    {
      id: 1,
      category: "공지사항",
      content: "글자는 최대 2줄 까지 노출됩니다. 글자는 최대 2줄 까지 노출됩니다.글자는 최대 2줄 까지 노출됩니다.",
      date: "1달 전",
      check: true,
    },
    { id: 2, category: "스케줄", content: "[스케줄 알림] D-1 해외 인플루언서 컨텐츠 제작 회의", date: "3달 전", check: false },
    { id: 3, category: "전자결재", content: "휴가 결재 요청의 건", date: "4달 전", check: true },
  ];

  return (
    <div className="alarm-modal">
      <div className="modal-head">
        <h3 className={`${s.captionXsB}`}>알림</h3>
        <button
          className="close-modal"
          onClick={() => {
            if (closeFn) {
              closeFn();
            }
          }}
        >
          <img src="/img/main-icons/ic_cancle_small-24x24.svg" alt="취소" />
        </button>
      </div>
      <div className="alarm-modal-inner">
        {alarmList.map((item) => (
          <div className="alarm-content" key={item.id}>
            <TitleHead>
              <p className={s.captionXsR}>{item.category}</p>
              {item.check ? null : <span className="alarm-circle"></span>}
            </TitleHead>
            <ContentInfo className={s.captionXsR}>
              <p>{item.content}</p>
            </ContentInfo>
            <P className={s.captionXxsR}>{item.date}</P>
          </div>
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
}

export default AlamModal;

AlamModal.propTypes = {
  closeFn: PropTypes.func,
};
