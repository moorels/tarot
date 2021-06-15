import Image from 'next/image'
import React from 'react'
export function Imagestest (){

  var x = "";
  const numm = [];

for (var i =0;i<10;i++) {
  x = Math.floor(Math.random() * 176 ) + 1
numm.push(x)

}
console.log(numm)

 


   


    
        const [show, setShow] = React.useState(false)


        React.useEffect(() => {
            setTimeout(() => {
              setShow(true)
            }, 300)
          }, [show])
        
          if (!show) return null
        
          console.log(x)
    return (
         
        <div>
       
        <Image 
        src = {`/${numm[2]}.jpg`}
        width = {120}
        height={200}
        layout="fixed"
        ></Image>

        
        </div>
        
        
    )

}

export default Imagestest