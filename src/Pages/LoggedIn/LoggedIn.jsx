export default function LogginIn () {
    function handleLogOut () {
        localStorage.removeItem('token')
    }
    return (
        <button onClick={() => { handleLogOut () }}
        >Log Out</button>
    )
}