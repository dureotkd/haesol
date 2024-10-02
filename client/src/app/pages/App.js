import "../../shared/styles/global.css";
import "../../shared/utils/prototype";

import SuspensePageComponent from "../components/SuspensePageComponent";
import PageLoadingComponent from "../components/PageLoadingComponent";

import { pages } from "../../shared/constants/route";

import useForceRefresh from "../../shared/hooks/useForceRefresh";
import useLogin from "../hooks/useLogin";

import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const AdminContext = React.createContext({});

function App() {
  useForceRefresh();

  const { loginUser } = useLogin();

  const resPages = React.useMemo(() => {
    const res = [];

    pages.forEach((page) => {
      if (page.sub_menu.length > 0) {
        page.sub_menu.forEach((val) => {
          res.push(val);
        });
      } else {
        res.push(page);
      }
    });

    return res;
  }, []);

  return (
    <AdminContext.Provider
      value={{
        seq: 1,
        name: "케빈",
      }}
    >
      <BrowserRouter basename={process.env.BASE_URL}>
        <Routes>
          {resPages &&
            resPages.map(({ element, label, layout, url, sub_menu }, index) => {
              const suspenseElement = (
                <SuspensePageComponent layout={layout}>
                  <Suspense fallback={<PageLoadingComponent />}>{element}</Suspense>
                </SuspensePageComponent>
              );

              return <Route exact key={`haesol-${label}`} path={url} element={suspenseElement} />;
            })}
        </Routes>
      </BrowserRouter>
    </AdminContext.Provider>
  );
}

export { AdminContext };
export default App;
