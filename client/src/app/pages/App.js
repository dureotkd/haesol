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

  return (
    <AdminContext.Provider value={loginUser}>
      <BrowserRouter basename={process.env.BASE_URL}>
        <Routes>
          {pages &&
            pages.map(({ element, label, layout, url }, index) => {
              const suspenseElement = (
                <SuspensePageComponent layout={layout}>
                  <Suspense fallback={<PageLoadingComponent />}>{element}</Suspense>
                </SuspensePageComponent>
              );

              return <Route exact key={`valueplus-route-${label}`} path={url} element={suspenseElement} />;
            })}
        </Routes>
      </BrowserRouter>
    </AdminContext.Provider>
  );
}

export { AdminContext };
export default App;
