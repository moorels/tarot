
export function Imagestest (){

 

var numm = [];
while(numm.length < 9){
    var r = Math.floor(Math.random() * 156) + 1;
    if(numm.indexOf(r) === -1) numm.push(r);
}



    return (numm)
  }
export default Imagestest