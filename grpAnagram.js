let a = ["eat", "tea", "tan", "ate", "nat", "bat"] ;
const grp = {};
for (const str of a) {
   const sortedStr = str.split('').sort().join();
   
   if(!grp[sortedStr]){
    grp[sortedStr] = [];
   }
   grp[sortedStr].push(str);
}
console.log(Object.values(grp));