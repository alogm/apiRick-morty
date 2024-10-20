function Nav ({fnSubmit}){
    return(
        <div>
            <form onSubmit={fnSubmit}>
                <label >nombre: </label>
                <input type="text" />
                <button type="submit">buscar</button>
            </form>
        </div>
    )
}
export default Nav;