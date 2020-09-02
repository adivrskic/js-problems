// a function that takes in 2 strings and checks to see if the characters in the first string
// form a subsequence of the characters in the second string

function isSubsequence(str1, str2) {
  let s1 = 0;
  let s2 = 0;
  let count = 0;

  while (s2 !== str2.legnth) {
    if (str1[s1] === str2[s2]) {
      s1++;
      s2++;
      count++;

      if (count === str1.length) return true;
    } else if (str1[s1] !== str2[s2]) {
      s2++;
    }
  }

  return false;
}
