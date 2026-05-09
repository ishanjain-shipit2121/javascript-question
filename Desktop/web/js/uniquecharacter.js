for(let i=0; i< str.length; i++) {
  let currchar = str [i];
  if (anc.indexof(currchar) == -1) {
    ans += currchar;
  }
}
return ans ;
