import { $ } from "../utils/document";

import { AdminContext } from "../../app/pages/App";

import { pages } from "../constants/route";
import { SERVER_URL } from "../utils/request";

import { useNavigate, useLocation } from "react-router-dom";

import React from "react";

function AdminLayout(props) {
  const { children } = props;

  const [adminMenu, setAdminMenu] = React.useState(false);

  // React.useEffect(() => {
  //   const removeAdminMenu = () => {};

  //   $("body").addEventListener("click", removeAdminMenu);

  //   return () => {
  //     $("body").addEventListener("click", removeAdminMenu);
  //   };
  // }, []);

  const navigation = useNavigate();
  const location = useLocation();

  const loginUser = React.useContext(AdminContext);

  const handleMenu = React.useCallback(
    (link) => {
      navigation(link);
    },
    [navigation],
  );

  return (
    <>
      <header
        style={{
          backgroundColor: "#000",
          width: "100%",
          height: 60,
          position: "fixed",
          top: 0,
          zIndex: 100,
        }}
      >
        <nav className="navi-menu">
          <div style={{ display: "flex" }}>
            <div
              className="logo-txt"
              style={{
                color: "#fff",
                textAlign: "center",
                marginRight: 100,
              }}
            >
              ValuePlus ERP
            </div>
            <div className="menu-wrap" style={{ display: "flex", height: 60 }}>
              {pages &&
                pages.map(({ label, url, nav, sub_menu }, index) => {
                  if (nav === false) {
                    return true;
                  }

                  const activeMenu = location.pathname == url ? "active-menu" : "";

                  return (
                    <ul
                      key={`menu-${index}`}
                      style={{
                        marginLeft: 12,
                        color: "#fff",
                        width: 200,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        fontSize: 17,
                      }}
                      className={`main-menu-wrap ${activeMenu}`}
                      onClick={handleMenu.bind(this, url)}
                    >
                      {label}
                      {/* {sub_menu &&
                        sub_menu.map(({ sub_name }, sub_index) => {
                          return (
                            <ul key={`sub-menu-${sub_index}`} className="sub-menu-wrap">
                              <li>{sub_name}</li>
                            </ul>
                          );
                        })} */}
                    </ul>
                  );
                })}
            </div>
          </div>

          <div
            style={{
              color: "#fff",
              display: "flex",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <div className="admin-circle-wrap" onClick={() => setAdminMenu((prev) => !prev)}>
              <span>{loginUser?.user_name || ""}</span>
            </div>

            {adminMenu && (
              <div className="dropdown-admin">
                <a className="t-cente dropdown-menu" href={`${SERVER_URL}/logout`} rel="로그아웃">
                  로그아웃
                </a>
              </div>
            )}
          </div>
        </nav>
      </header>
      <section className="content-con">{children}</section>
    </>
  );
}

export default AdminLayout;
