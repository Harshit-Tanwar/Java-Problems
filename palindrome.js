let s = "A man, a plan, a canal: Panama";
let cleanS = s.toLowerCase().replace(/[^a-z0-9]/g, "");
let rev = "";
for (let i = cleanS.length; i >= 0; i--){
    rev  = rev + cleanS.charAt(i);
}
console.log(rev === cleanS);
