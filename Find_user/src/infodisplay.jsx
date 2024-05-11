import githubuserdata from "./hooks/customhooks"

const Infodisplay = ({Name}) => {
    const {user , error} = githubuserdata(Name)
    console.log(user)

    return(
        <>
         <div className="info">
            <img src={user.avatar_url} alt="" className="profilepic"/>
            <div>Name:{user.name}</div>
            <div>Bio: {user.bio? user.bio : "NA"}</div>
            <div>Followers:{user.followers}</div> 
            <div>Following:{user.following}</div> 
            <div>{error? error : ""}</div>
         </div>
        </>
    )
}

export default Infodisplay