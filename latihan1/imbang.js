/**
 * cek apakah tanda kurung imbang dan sesuai pasangan atau tidak
 */

function imbang(str) {
  if(str.length % 2 == 1)
   return false;
  else{
    var benul = true;
    for(let i = str.length-1, j = 0, k = str.length/2; k > 0; k--, j++, i--){
      if(str[j] == '('){
        if(str[i] == ')') benul = true;
        else benul = false;
      }
      else if(str[j] == '{'){
        if(str[i] == '}') benul = true;
        else benul = false;
      }
      else if(str[j] == '['){
        if(str[i] == ']') benul = true;
        else benul = false;
      }
      if(benul == false)
       return false;
    }
    if(benul == true)
       return true;
  }
}

/**
 * contoh
 * imbang("[()]")
 * imbang("[(])")
 * true
 * false
 */

console.log(imbang("[({()})]"));
console.log(imbang("({({[})})"));
console.log(imbang("(((({{{[]}})))))"));
