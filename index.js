module.exports = function getPercentageDifference(strParam1, strParam2) {
  // Get arr of symbols from shorter string
  let str1 = strParam1;
  let str2 = strParam2.split("");
  if (strParam1.length < strParam2.length) {
    str1 = strParam2;
    str2 = strParam1.split("");
  }

  // Get longer str length to get number of different symbols
  let differentSymbNum = str1.length;

  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < differentSymbNum; j++) {
      if (str1[i] == str2[j]) {
        str2.splice(j, 1);
        differentSymbNum--;
        break;
      }
    }
  }

  // Compare number of different symbols to longer str length
  let differenceInPercent = (differentSymbNum * 100) / str1.length;
  if (differenceInPercent > 100) differenceInPercent = 100;
  return differenceInPercent;
};
