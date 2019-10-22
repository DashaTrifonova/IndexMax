
const func = (array) => {
  let l = array.length;
  let max = array[0];
  let maxi = 0;
  
  for ( let i=1; i <= l; i++ ) {
    if (max < array[i]) {
      max = array[i];
      maxi = i;
    };
  };
  return maxi;
};

