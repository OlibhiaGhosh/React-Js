import { useEffect , useState} from "react"

const githubuserdata = (Name) => {
    const [error, setError] = useState("")
    const [user, setUser] = useState("")
    useEffect(() => {
        const fetchdata= async() => {
            try{
                const response = await fetch(`https://api.github.com/users/${Name}`);
                const responsefinal= await response.json()
                setUser(responsefinal)
            }catch(error){
                setError(error)
            }
        }
        fetchdata()
    },[Name])

    return {user , error};
}

export default githubuserdata