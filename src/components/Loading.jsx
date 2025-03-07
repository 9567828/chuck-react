import { useEffect, useState } from "react";
import styled from "styled-components";

const Div = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 152px;
  }
`;

function Loading() {
  const [showFallback, setShowFallBack] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowFallBack(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);
  if (showFallback) {
    return (
      <Div>
        <img src="../../img/loading.gif" alt="로딩이미지" />
      </Div>
    );
  }
}

export default Loading;
