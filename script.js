const interestCalculator = a => {
  const pData = new Map();

  const tData = new Map();

  const initData = a;
  const interestData = [];
  initData.forEach(e => {
    pData.set("principal", e[0]);
    tData.set("time", e[1]);
  });

  initData.forEach(e => {
    let r;

    if (e[0] >= 2500 && e[1] > 1 && e[1] < 3) {
      r = 3;
      const interest = (e[0] * e[1] * r) / 100;

      const getKeyP = (obj, value) =>
        Object.keys(obj).find(key => obj[key] === value);
      getKeyP(pData, e[0]);

      const getKeyT = (obj, value) =>
        Object.keys(obj).find(key => obj[key] === value);
      getKeyT(tData, e[1]);
      interestData.push([
        ["Principal: ", e[0], e[0]],
        ["Time:", e[1], e[1]],
        r,
        interest
      ]);
    } else if (e[0] >= 2500 && e[1] >= 3) {
      r = 4;
      const interest = (e[0] * e[1] * r) / 100;

      const getKeyP = (obj, value) =>
        Object.keys(obj).find(key => obj[key] === value);
      getKeyP(pData, e[0]);

      const getKeyT = (obj, value) =>
        Object.keys(obj).find(key => obj[key] === value);
      getKeyT(tData, e[1]);
      interestData.push([
        ["Principal: ", e[0], e[0]],
        ["Time: ", e[1], e[1]],
        r,
        interest
      ]);
    } else if (e[0] < 2500 || e[1] <= 1) {
      r = 2;
      const interest = (e[0] * e[1] * r) / 100;

      const getKeyP = (obj, value) =>
        Object.keys(obj).find(key => obj[key] === value);
      getKeyP(pData, e[0]);

      const getKeyT = (obj, value) =>
        Object.keys(obj).find(key => obj[key] === value);
      getKeyT(tData, e[1]);
      interestData.push([
        ["Principal: ", e[0], e[0]],
        ["Time: ", e[1], e[1]],
        r,
        interest
      ]);
    } else {
      r = 1;
      const interest = (e[0] * e[1] * r) / 100;

      const getKeyP = (obj, value) =>
        Object.keys(obj).find(key => obj[key] === value);
      getKeyP(pData, e[0]);

      const getKeyT = (obj, value) =>
        Object.keys(obj).find(key => obj[key] === value);
      getKeyT(tData, e[1]);
      interestData.push([
        ["Principal: ", e[0], e[0]],
        ["Time: ", e[1], e[1]],
        r,
        interest
      ]);
    }
  });
  return interestData;
};
console.log(
  interestCalculator([
    [2500, 1.8],
    [1000, 5],
    [3000, 1],
    [2000, 3]
  ])
);
