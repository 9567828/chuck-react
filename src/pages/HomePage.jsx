import Home from "../components/Home";
import Header from "../layouts/Header";
import { isMobile } from "react-device-detect";

function HomePage() {
  if (isMobile) {
    alert("모바일에서는 접근 불가합니다.");
    return null;
  }

  return (
    <>
      <Header />
      <Home />
    </>
  );
}
export default HomePage;
