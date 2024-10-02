import { doLogin } from "./Api";

import { getFormDataToObject } from "../../shared/utils/form";

import React from "react";

function Login() {
  const submitLogin = React.useCallback(async (event) => {
    event.preventDefault();

    const parmas = getFormDataToObject(event);
    const { code } = await doLogin(parmas);

    if (code === "success") {
      window.location.href = `/baseinfo/company`;
    }
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          width: 1280,
          height: 680,
          background: "#fff",
          borderRadius: "2px",
          boxShadow: "3px 3px 5px rgba(0, 0, 0, 0.1)",
          display: "flex",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#f4f5f9",
          }}
        >
          <div>
            <form onSubmit={submitLogin}>
              <span
                style={{
                  fontSize: 30,
                  fontWeight: 700,
                  color: "#444444",
                  textAlign: "center",
                  display: "block",
                  margin: "170px 0 45px 0",
                }}
              >
                관리자 로그인
              </span>
              <div id="id-input">
                <input type="text" name="id" id="id" placeholder="아이디" />
              </div>
              <div id="password-input">
                <input type="password" name="pw" id="pw" placeholder="비밀번호" />
              </div>

              <div className="checkbox-wrapper-15" style={{ marginTop: 18 }}>
                <input
                  className="inp-cbx auto_login"
                  name="auto_yn"
                  id="cbx-15"
                  type="checkbox"
                  style={{ display: "none" }}
                />
                <label className="cbx" htmlFor="cbx-15">
                  <span>
                    <svg width="12px" height="9px" viewBox="0 0 12 9">
                      <polyline points="1 5 4 8 11 1"></polyline>
                    </svg>
                  </span>
                  <span>자동 로그인</span>
                </label>
              </div>

              <div className="login-button">
                <button type="submit">로그인</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
