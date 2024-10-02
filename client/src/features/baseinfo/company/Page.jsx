import useData from "./useData";

import CheckboxComponent from "../../../shared/components/CheckboxComponent";
import FetchLoadingComponent from "../../../shared/components/FetchLoadingComponent";

import React from "react";

function Page() {
  const { data, loading } = useData();

  return (
    <div className="page">
      {loading ? (
        <FetchLoadingComponent />
      ) : (
        <div>
          <h2>기업정보입력</h2>
          <div style={{ display: "flex", marginTop: 42 }}>
            {data.admins.map((item) => {
              return (
                <div
                  style={{
                    width: 100,
                    textAlign: "center",
                    padding: "12px 0px",
                    marginRight: 22,
                    // borderBottom: "1px solid black",
                  }}
                >
                  {item.name}
                </div>
              );
            })}

            <button className="basics-btn" type="button">
              기업 추가
            </button>
          </div>

          <form action=""></form>

          <div className="list-con">
            <table>
              <thead>
                <tr>
                  <th>
                    <input type="checkbox" name="" />
                  </th>
                  <th>ID</th>
                  <th>회사명</th>
                  <th>사업자등록번호</th>
                  <th>대표명</th>
                  <th>사업장주소</th>
                  <th>업종</th>
                  <th>업태</th>
                  <th>전화번호</th>
                  <th>5인이상 회사</th>
                  <th>수임여부</th>
                  <th>교육여부</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ textAlign: "center" }}>
                    <input type="checkbox" name="" />
                  </td>
                  <td>1234</td>
                  <td>회사명</td>
                  <td>사업자등록번호</td>
                  <td>대표명</td>
                  <td>사업장주소</td>
                  <td>업종</td>
                  <td>업태</td>
                  <td>전화번호</td>
                  <td>5인이상</td>
                  <td>수임여부</td>
                  <td>교육여부</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default Page;
