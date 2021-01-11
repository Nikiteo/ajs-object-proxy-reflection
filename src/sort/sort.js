export default function orderByProps(oObj, arrProps = []) {
  const copyObj = { ...oObj };
  const resultArr = [];

  function sortage(arr) {
    if (arr.length) {
      for (let i = 0; i < arr.length; i += 1) {
        if (Object.prototype.hasOwnProperty.call(copyObj, arr[i])) {
          resultArr.push({ key: arr[i], value: copyObj[arr[i]] });
          delete copyObj[arr[i]];
        }
      }
    }
  }

  sortage(arrProps);
  const unSortKeys = Object.keys(copyObj);
  unSortKeys.sort();
  sortage(unSortKeys);
  return resultArr;
}
