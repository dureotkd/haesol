import { AdminContext } from "../../../app/pages/App";

import request from "../../../shared/utils/request";

import React from "react";

function useData(qs) {
  const loginUser = React.useContext(AdminContext);

  console.log(loginUser);

  const [loading, setLoading] = React.useState(true);
  const [data, setData] = React.useState({});

  React.useEffect(() => {
    (async () => {
      try {
        const admin = await request.get(`/admin`);
        const companies = await request.get(`/admin/${loginUser.seq}/companies`);

        setData((prev) => {
          return {
            ...prev,
            admins: admin.data,
            companies: companies.data,
          };
        });

        // setData(data);
      } catch {
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { loading, data };
}

export default useData;
