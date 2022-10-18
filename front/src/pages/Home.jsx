const name = localStorage.getItem('name')

function Home() {

    function logout() {
        localStorage.clear()
    }
    

    return (
        <div>
            <h1>Welcome {name}</h1>
            <br />
            <h2>logout</h2>
            <button onClick={logout}>out</button>
        </div>   
    )
}

export default Home