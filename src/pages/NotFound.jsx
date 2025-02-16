import { Link } from "react-router";

function NotFound() {
  return (
    <div className="page-container">
      <div className="head font-bold">
        <h1>404</h1>
        <h3>Page not found</h3>
      </div>
      <p className="font-bold">앗! 뭐든지 척척 잘해볼려고 했는데 잘 안됐네요.</p>
      <Link to="/" className="primary-btn">
        <span>홈으로 돌아가기</span>
      </Link>
    </div>
  );
}

export default NotFound;
