import { useState } from "react";

const Colorgenerator = () => {
    let [colorcode, setstate]=useState("#ffffff")
    const hexcolorcode = () => {
        colorcode = "#"
        const hexcode= "0123456789abcdef"
        for (let i = 0; i < 6; i++) {
            let randomnumber= Math.floor((Math.random()*16) + 1);
            colorcode+=(hexcode.charAt(randomnumber));
            
        }
        console.log(colorcode);
        setstate(colorcode)
        
    }
    const resetcolor = () =>{
        colorcode = "#FFFFFF"
        setstate(colorcode)
    }
    return(
        <>
         <div className="container">
            <h1>Colorify</h1>
            <div className='colorbox'style={{backgroundColor:colorcode}}>
            </div>
            <button onClick={ hexcolorcode } className="button">Change me</button>
            <button onClick={ resetcolor } className="button">Reset</button>
         </div>
        </>
    )
}

export default Colorgenerator;