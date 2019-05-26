import reqwest from "reqwest";

const fetch = (url, params, cb, method='GET') => {
  reqwest({
    url: url,
    method: method,
    data: {
      ...params,
    },
    crossOrigin: true,
    type: 'json',
  }).then((data) => {
    cb(data);
  });
};

export default fetch;
