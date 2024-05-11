import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [password, setPassword] = useState("")
  const [length, setlength] = useState(6)
  const [numbersallowed, setnumber] = useState(false)
  const [charallowed, setChar] = useState(false)

  const refpass = useRef();

const copypassword =useCallback(() =>{
    refpass.current?.select();
    refpass.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
}, [password])

  const passwordgenerator = useCallback(() => {
    let pass = "";
    let str= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numbersallowed){
      str+="0123456789";
    }
    if(charallowed){
      str+="#$@!%&(){}[]~"
    }
    for (let i = 0; i < length; i++) {
      const randomnumber = Math.floor(Math.random()*str.length + 1 )
      pass+= str.charAt(randomnumber);
    }

    setPassword(pass)
  }, [length, numbersallowed , charallowed , setPassword])

  useEffect(()=>{
    passwordgenerator()
  },[length, numbersallowed , charallowed, passwordgenerator])


  return (
    <>
     <div className='flex justify-center items-center mt-10'>
        <div className=' flex flex-col justify-center items-center gap-y-6 p-6 border-black border-2 w-max max-sm:w-96 h-48 bg-slate-500 rounded-lg'>
          <div className='flex gap-x-8 max-sm:gap-x-6'>
            <input type="text" value={password} readOnly ref={refpass} className='h-10 w-64'/>
            <button onClick={()=>{copypassword()}} className=' border-blue-950 bg-black text-white font-bold w-20 h-10 rounded-lg'>Copy</button>
          </div>
          <div className='flex gap-x-6 max-sm:gap-x-5'>
            <div className='flex gap-x-2'>
              <input type="range" min={6} max={100} id='length' value={length} onChange={(e) => setlength(e.target.value)} className="w-auto max-sm:w-12"/>
              <label htmlFor="length" className='font-medium flex justify-center items-center w-auto max-sm:w-16 '>Length {length}</label>
            </div>
            <div className='flex gap-x-2 max-sm:gap-x-2'>
              <input type="checkbox" defaultChecked={numbersallowed} id="numbers" onChange={()=>{setnumber((prev)=>!prev)}} className='w-4' />
              <label htmlFor="numbers" className='font-medium flex justify-center items-center'>Numbers?</label>
            </div>
            <div className='flex gap-x-2 max-sm:gap-x-2'>
              <input type="checkbox" defaultChecked={charallowed} id="char" onChange={()=>{setChar((prev)=>!prev)}} className='w-4 max-sm:w-auto' />
              <label htmlFor="char" className='font-medium flex justify-center items-center'>Characters?</label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
