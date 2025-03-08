import * as s from "../../assets/scss/modules/style.module.scss";
import styled from "styled-components";
import PropTypes from "prop-types";

const ContentInfo = styled.div`
  margin-top: 8px;
  color: #9e9e9e;
`;

const BtnWrap = styled.div`
  margin-top: 16px;
`;

const Footer = styled.div`
  height: 18px;
`;

function InviteModal({ closeFn, confirmFn, cancelFn }) {
  const inviteList = [
    { id: 1, name: "김지호", emailId: "rlawlgh486@naver.com" },
    { id: 2, name: "임혜영", emailId: "limyu486@gmail.com" },
    { id: 3, name: "임혜영", emailId: "limyu7889@gmail.com" },
  ];

  return (
    <div className="invite-modal">
      <div className="modal-head">
        <h3 className={`${s.captionXsM}`}>요청</h3>
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
      <div className="invite-modal-inner">
        {inviteList.map((item) => (
          <div className="invite-content" key={item.id}>
            <h3 className={s.captionXsR}>새로운 가입 요청이 있어요.</h3>
            <ContentInfo className={s.captionXxsR}>
              <p>이름 : {item.name}</p>
              <p>아이디 : {item.emailId}</p>
            </ContentInfo>
            <BtnWrap className={s.btnWrap}>
              <button
                className="sub-btn-regular"
                onClick={() => {
                  if (confirmFn) {
                    confirmFn();
                  }
                }}
              >
                수락
              </button>
              <button
                className="sub-btn-regular cancel"
                onClick={() => {
                  if (cancelFn) {
                    cancelFn();
                  }
                }}
              >
                거절
              </button>
            </BtnWrap>
          </div>
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
}

export default InviteModal;

InviteModal.propTypes = {
  closeFn: PropTypes.func,
  confirmFn: PropTypes.func,
  cancelFn: PropTypes.func,
};
