import ResetPw from "../../components/account/SetPwComponent";
import AccountFooter from "../../layouts/AccountFooter";

function LoginPage() {
  return (
    <>
      <ResetPw title={"비밀번호 재생성"} />
      <AccountFooter />
    </>
  );
}

export default LoginPage;
