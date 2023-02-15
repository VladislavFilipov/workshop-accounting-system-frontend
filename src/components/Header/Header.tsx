// import Clock from "@src/components/Header/Clock";
import UserInfo from "@src/components/Header/UserInfo";
import useAuthStore from "@src/store/auth";

const Header = () => {
  const logout = useAuthStore((state) => state.logout);
  const isAuthorized = useAuthStore((state) => state.isAuthorized);
  return (
    <div>
      {isAuthorized && <button onClick={logout}>Выйти</button>}
      <UserInfo />
    </div>
  );
};

export default Header;
