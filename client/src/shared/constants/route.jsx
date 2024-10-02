import React from "react";

const Login = React.lazy(() => import("../../features/login/pages/Login"));
const SalesManage = React.lazy(() => import("../../features/salesManage/pages/SalesManage"));
const SalesMemo = React.lazy(() => import("../../features/salesMemo/pages/SalesMemo"));
const SalesMemoList = React.lazy(() => import("../../features/salesMemoList/pages/SalesMemoList"));
const SalesCompanyGradeList = React.lazy(() =>
  import("../../features/salesCompanyGradeList/pages/SalesCompanyGradeList"),
);
const ItemManage = React.lazy(() => import("../../features/itemManage/pages/ItemManage"));
const ContractManage = React.lazy(() => import("../../features/contractManage/pages/ContractManage"));

const Test = () => {
  return <div>Test</div>;
};

const pages = [
  {
    url: "/Login",
    label: "로그인",
    element: <Login />,
    sub_menu: [],
    layout: false,
    nav: false,
  },
  // {
  //   url: "/Test",
  //   label: "로그인",
  //   element: <Test />,
  //   sub_menu: [],
  //   layout: true,
  //   nav: false,
  // },
  {
    url: "/SalesManage",
    label: "영업관리",
    element: <SalesManage />,
    sub_menu: [],
    layout: true,
    nav: true,
  },
  {
    url: "/SalesMemoList",
    label: "상담메모",
    element: <SalesMemoList />,
    sub_menu: [],
    layout: true,
    nav: true,
  },
  {
    url: "/SalesCompanyGradeList",
    label: "영업등급",
    element: <SalesCompanyGradeList />,
    sub_menu: [],
    layout: true,
    nav: true,
  },
  {
    url: "/ContractManage",
    label: "계약관리",
    element: <ContractManage />,
    sub_menu: [],
    layout: true,
    nav: true,
  },
  // {
  //   url: "/ItemManage",
  //   label: "모델관리",
  //   element: <ItemManage />,
  //   sub_menu: [],
  //   layout: true,
  //   nav: true,
  // },

  {
    url: "/SalesMemo",
    label: "영업관리[메모]",
    element: <SalesMemo />,
    sub_menu: [],
    layout: false,
    nav: false,
  },
];

export { pages };
