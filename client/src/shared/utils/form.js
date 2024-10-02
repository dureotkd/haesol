/**
 * 폼 데이터 Submit 할 경우 (serializeObject랑 같습니다)
 * @param {event.target} target
 * @returns {
 *  id : 1,   // input name:id , value:1
 *  page : 2  // input name:page , value:2
 * }
 */
function getFormDataToObject(event) {
  const formData = new FormData(event.target);
  const data = [...formData.entries()];
  const searchData = {};

  data.forEach(([name, value]) => {
    // `name`이 null인 경우를 체크합니다
    if (name === null) return;

    const keys = name.match(/([^\[\]]+)/g);

    // `keys`가 null인 경우를 체크합니다
    if (!keys) return;

    let currentLevel = searchData;

    keys.forEach((key, index) => {
      // `key`가 null인 경우를 체크합니다
      if (key === null || key === undefined) {
      }

      if (index === keys.length - 1) {
        // 마지막 키일 경우 값을 설정합니다
        if (Array.isArray(currentLevel[key])) {
          currentLevel[key].push(value);
        } else if (currentLevel[key] !== undefined) {
          currentLevel[key] = `${currentLevel[key]}/${value}`;
        } else {
          currentLevel[key] = value;
        }
      } else {
        // 중첩 객체를 생성합니다
        if (!currentLevel[key]) {
          currentLevel[key] = {};
        }

        currentLevel = currentLevel[key];
      }
    });
  });

  return searchData;
}

export { getFormDataToObject };
