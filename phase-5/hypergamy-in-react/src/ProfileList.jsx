import Profile from './Profile'

function ProfileList ({userInfoForEveryone}) {
console.log(userInfoForEveryone); 
userComponents = userInfoForEveryone.map((user) => {
    return <Profile key={user.id} user={user} />
})


    return (
        <>
        {userComponents}
        </>
    )
}
export default ProfileList;