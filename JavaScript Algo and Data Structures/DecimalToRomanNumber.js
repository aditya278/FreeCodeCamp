/*
JavaScript Algorithms and Data Structures Projects: Roman Numeral Converter
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.
*/

function convertToRoman(num) {

    if(num<=0 || num>=4000) {
        return num;
    }
    
    var romanNum = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
    var decNum = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
    
    var res = '';
    for(var i=0; i<=romanNum.length; i++) {
      while(num>=decNum[i]) {
        num -= decNum[i];
        res += romanNum[i];
      }
    }
  
    return res;
  }
  
console.log(convertToRoman(36));
console.log(convertToRoman(3999));