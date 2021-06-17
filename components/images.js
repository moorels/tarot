export function Imagestest () {

  
  function arrayUnique(array) {
    var a = array.concat();
    for(var i=0; i<a.length; ++i) {
        for(var j=i+1; j<a.length; ++j) {
            if(a[i] === a[j])
                a.splice(j--, 1);
        }
    }

    return a;
}

var numm = [];
var numm1 = [];
while(numm.length < 30){
    var r = Math.floor(Math.random() * 78) + 1;
    if(numm.indexOf(r) === -1) numm.push(r);
}

while(numm1.length < 30){
  var r = Math.floor(Math.random() * (187 - 110 + 1) + 110);
  if(numm1.indexOf(r) === -1) numm1.push(r);
}

var nummfinal = arrayUnique(numm.concat(numm1))

for(let i = nummfinal.length - 1; i > 0; i--){
  const j = Math.floor(Math.random() * i)
  const temp = nummfinal[i]
  nummfinal[i] = nummfinal[j]
  nummfinal[j] = temp
}

return (

nummfinal

)
    
  }
export default Imagestest