function onlyInt(arr) {
  return arr.filter((elem) => {
    return !isNaN(elem) && elem !== true && elem !== false && elem !== null;
  });
}

console.log(
  onlyInt([1, 2, "a", true, {}, undefined, 55, false, "hi", null, 166, NaN])
);
