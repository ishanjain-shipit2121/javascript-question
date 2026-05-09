// write a fucntion that accpets a list of country names as input and retirn the longest name as output
let country =["austriala" , "germany", "usa"];

function longestName(country) {
  let ansIdx = 0;
  for (let i =0; i < country.length; i++) {
    let ansLen = country[ansIdx].length;
    let currLEN = country[i].length;
    if(currLEN > ansLEN){
      ansIdx = i;
    }
  }
  return country[ansIDX];

}
LongestName(country);

