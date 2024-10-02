import { useLocation } from "react-router-dom";
import AdminLayout from "../../shared/layouts/AdminLayout";

import React from "react";

function SuspensePageComponent(props) {
  const { children, layout } = props;

  return layout ? <AdminLayout>{children}</AdminLayout> : children;
}

export default SuspensePageComponent;
