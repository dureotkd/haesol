import { $ } from "../utils/document";

import { AdminContext } from "../../app/pages/App";

import { pages } from "../constants/route";
import { SERVER_URL } from "../utils/request";

import { useNavigate, useLocation } from "react-router-dom";

import React from "react";

function AdminLayout(props) {
  const { children } = props;

  const [adminMenu, setAdminMenu] = React.useState(false);

  const navigation = useNavigate();
  const location = useLocation();

  const loginUser = React.useContext(AdminContext);

  const asidePages = React.useMemo(() => {
    return pages.filter((page) => page.layout);
  }, []);

  const pageArray = React.useMemo(() => {
    return window.location.pathname.split("/");
  }, []);

  const handlePage = React.useCallback(
    (link) => {
      navigation(link);
    },
    [navigation],
  );

  return (
    <>
      <header className="top-header">
        <nav className="navi-menu">
          <div style={{ display: "flex", alignItems: "center" }}>
            <i
              className="fas fa-bars"
              style={{ color: "#fff", marginRight: 18, fontSize: 24, marginTop: 6, cursor: "pointer" }}
            ></i>
            <div
              className="logo-txt"
              style={{
                color: "#fff",
                textAlign: "center",
                marginRight: 100,
              }}
            >
              HAESOL Admin
            </div>
            {/* <div className="menu-wrap" style={{ display: "flex", height: 60 }}>
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
                    </ul>
                  );
                })}
            </div> */}
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
      <div style={{ display: "flex" }}>
        <aside>
          {asidePages &&
            asidePages.map((item) => {
              const active = item.url === pageArray[1] ? "main-active" : "";

              return (
                <div
                  key={`main-menu-${item.url}`}
                  className="aside-item"
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <div
                    className={`${active}`}
                    style={{ display: "flex", alignItems: "center", width: "100%", justifyContent: "space-between" }}
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <img src={`/images/ic19_menu_corp.png`} alt="company-img" style={{ width: 20, marginTop: 3 }} />
                      <span style={{ marginLeft: 12 }}>{item.label}</span>
                    </div>
                    <i className="fas fa-angle-down" style={{ color: "#ccc" }}></i>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
                    {item.sub_menu &&
                      item.sub_menu.map((val) => {
                        if (!val.nav) {
                          return true;
                        }

                        const active = val.url === window.location.pathname ? "sub-active" : "";

                        return (
                          <span
                            className={`${active}`}
                            key={`sub-menu-${val.url}`}
                            onClick={handlePage.bind(this, val.url)}
                            style={{
                              paddingTop: 6,
                              paddingBottom: 6,
                              marginTop: 12,
                              paddingLeft: 42,
                              cursor: "pointer",
                            }}
                          >
                            {val.label}
                          </span>
                        );
                      })}
                  </div>
                </div>
              );
            })}
        </aside>
        <section className="content-con">{children}</section>
      </div>
    </>
  );
}

export default AdminLayout;
