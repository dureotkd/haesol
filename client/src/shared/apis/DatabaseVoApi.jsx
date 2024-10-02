import request from "../utils/request";

const fetchSalesCardTerminalVo = async () => {
  const { data } = await request.get("sales_card_terminal_vo");

  return data;
};

const fetchSalesCardMemoVo = async () => {
  const { data } = await request.get("sales_card_memo_vo");

  return data;
};

const fetchSalesCardCompanyGradeVo = async () => {
  const { data } = await request.get("sales_card_company_grade_vo");

  return data;
};

const fetchModelItemVo = async () => {
  const { data } = await request.get("model_item_vo");

  return data;
};

const fetchCardTerminalContractVo = async () => {
  const { data } = await request.get("card_terminal_contract_vo");

  return data;
};

export {
  fetchSalesCardTerminalVo,
  fetchSalesCardMemoVo,
  fetchSalesCardCompanyGradeVo,
  fetchModelItemVo,
  fetchCardTerminalContractVo,
};
