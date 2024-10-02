import React from "react";

const Login = React.lazy(() => import("../../features/login/Page"));
const BaseInfoCompany = React.lazy(() => import("../../features/baseinfo/company/Page"));
const BaseInfoEmployee = React.lazy(() => import("../../features/baseinfo/employee/Page"));

const pages = [
  {
    url: "login",
    label: "로그인",
    element: <Login />,
    sub_menu: [],
    layout: false,
  },
  {
    url: "baseinfo",
    label: "기본정보",
    layout: true,
    sub_menu: [
      {
        url: "/baseinfo/company",
        label: "기업정보입력",
        element: <BaseInfoCompany />,
        layout: true,
        nav: true,
      },
      {
        url: "/baseinfo/employee",
        label: "직원정보입력",
        element: <BaseInfoEmployee />,
        layout: true,
        nav: true,
      },
    ],
  },
  {
    url: "tax",
    label: "세액입력",
    layout: true,
    sub_menu: [],
  },
  {
    url: "salary",
    label: "급여",
    layout: true,
    sub_menu: [],
  },
  {
    url: "bill",
    label: "계약서 및 명세서",
    layout: true,
    sub_menu: [],
  },
  {
    url: "etc",
    label: "기타",
    layout: true,
    sub_menu: [],
  },
];

export { pages };
