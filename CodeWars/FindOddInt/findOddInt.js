const arry = [7, 7, 2, 3, 2, 4, 5, 5, 6, 4, 6, 2];
const arr = document.querySelector('#arr');
const el = document.querySelector('#el');
const count = document.querySelector('#count');
arr.innerHTML = `[ ${arry} ]`;

const toFindDuplicates = (A) => {
  const res = A.reduce(
    (acc, value) => ({
      ...acc,
      [value]: (acc[value] || 0) + 1,
    }),
    0
  );
  for (const key in res) {
    if (res[key] % 2 === 1) {
      el.innerHTML = key;
      count.innerHTML = res[key];
      return key;
    }
  }
  return 0;
};

console.log(toFindDuplicates(arry));
