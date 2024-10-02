import qs from "qs";

function getQs() {
  const query = qs.parse(window.location.search, {
    ignoreQueryPrefix: true,
  });

  return query;
}

function getQsString() {
  const queryObject = getQs();
  const queryString = qs.stringify(queryObject);

  return queryString;
}

export { getQs, getQsString };
