function numberFormat() {
  const number = parseFloat(value.replace(/,/g, "")); // 기존 쉼표 제거
  if (isNaN(number)) return ""; // 숫자가 아닌 경우 빈 문자열 반환
  return number.toLocaleString(); // 숫자를 천 단위마다 쉼표를 추가하여 포맷
}

export { numberFormat };
