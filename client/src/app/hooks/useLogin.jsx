import request from "../../shared/utils/request";

import React from "react";

function useLogin() {
  const [loginUser, setLoinUser] = React.useState({});

  React.useEffect(() => {
    (async () => {
      const {
        data: { code, data },
      } = await request.post("auto_login");

      if (code === "success") {
        setLoinUser(data);
      } else {
        // == 로그인 실패 경우 Login으로 Redirect ==
        try {
          const paths = window.location.pathname.split("/");
          const pageName = paths[paths.length - 1].toLocaleUpperCase();

          if (!["LOGIN"].includes(pageName)) {
            window.location.href = `${process.env.BASE_URL}/Login`;
          }
        } catch {}
      }
    })();
  }, []);

  return { loginUser };
}

export default useLogin;
