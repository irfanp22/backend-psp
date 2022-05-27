/**
 * fungsi yang membalikkan kalimat/string
 * dilarang menggunakan method reverse()
 */

function balikString(str) {
  var strBalik = '';
  for(let i = str.length - 1; i >= 0 ; i--){
    strBalik = strBalik + str[i];
  }
  return strBalik;
}
/**
 * contoh
 * balikString('halo dek')
 * ked olah
 */
console.log(balikString("hello world"));
console.log(balikString("bolak balik"));
console.log(balikString("evil o live"));
