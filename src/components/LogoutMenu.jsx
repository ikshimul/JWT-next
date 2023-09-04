import { cookies } from "next/headers";

const LogoutMenu = () => {
  const cookieStore = cookies();
  const token = cookieStore.get("token");
  return (
    <>
      {token ? (
        <li>
          <a onClick={Logout}>লগআউট</a>
        </li>
      ) : (
        ""
      )}
    </>
  );
};

export default LogoutMenu;
