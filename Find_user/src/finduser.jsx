import { useState } from "react"
import Infodisplay from "./infodisplay"
const Finduser= () =>{
    const[Name , setName] = useState("")
    function checkname(){
        if(Name ==="" || Name=== null || Name === undefined){
            return false;
        }else{
            return true;
        }
    }
    return(
        <>
         <div className="Container">
            <h1>Find user from Github</h1>
            <input type="text" placeholder="Enter the name" value={Name} onChange={(e) =>setName(e.target.value)} />
            <div className="Info">
            {
                checkname({Name}) ? 
                <Infodisplay Name={Name} /> : 
                <p>Please Initiate a Search!!!</p>
            }
            </div>
         </div>
        </>
    )
}
export default Finduser