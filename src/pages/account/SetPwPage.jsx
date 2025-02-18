import SetPassword from "../../components/account/SetPwComponent";
import AccountFooter from "../../layouts/AccountFooter";

function LoginPage() {
  return (
    <>
      <SetPassword title={"비밀번호 생성"} />
      <AccountFooter />
    </>
  );
}

export default LoginPage;
