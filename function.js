
const getMaxInd = array => {
  const { index } = array.reduce((res, val, ind) => {
    if (val > res.value) {
      res.value = val;
      res.index = ind;
    }
    return res;
  }, { value: 0, index: 0 });

  return index;
};

