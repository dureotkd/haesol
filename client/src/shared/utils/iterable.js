function deepCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}

function changeSearchVoType(vo) {
  const res = [];

  Object.entries(vo).forEach(([key, value]) => {
    res[key] = [];
    Object.entries(value).forEach(([subKey, subValue]) => {
      res[key].push({
        label: subValue,
        value: subKey,
      });
    });
  });

  return res;
}

export { deepCopy, changeSearchVoType };
