import User from './User'
function UserList({createRating, LoggedInUser, users}) {

    console.log("hello")

    const userComponent = users.map((user) => {
        if(user.id !== LoggedInUser.id){
            return <User key={user.id} user={user} LoggedInUser={LoggedInUser} createRating={createRating}/>
        }
        else {
        return null
    }

    })
    
    return (
        <>
        {userComponent}
        </>
    )
}

export default UserList;