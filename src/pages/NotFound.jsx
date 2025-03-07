import { Link } from "react-router";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1,
  h3,
  p {
    font-weight: 700;
    line-height: 150%;
    letter-spacing: -0.02em;
  }
`;

const Head = styled.div`
  position: relative;
  color: #ff5116;
  h1 {
    font-size: 180px;
  }
  h3 {
    font-size: 29px;
    position: absolute;
    bottom: 3px;
    left: 95px;
  }
`;

const P = styled.p`
  margin-top: 50px;
  margin-bottom: 71px;
  font-size: 29px;
`;

function NotFound() {
  return (
    <Container>
      <Head>
        <h1>404</h1>
        <h3>Page not found</h3>
      </Head>
      <P>앗! 뭐든지 척척 잘해볼려고 했는데 잘 안됐네요.</P>
      <Link to="/" className="primary-btn">
        <span>홈으로 돌아가기</span>
      </Link>
    </Container>
  );
}

export default NotFound;
