export const MovieSearch = ({handleChange, searchButton, searchInput, getHomeData}) => {
    
    return (
        <>
            <form>
                <img src="./images/movie-icon.png" style={{height:"40px"}} onClick={()=>{getHomeData()}}/>
                <input type="text" value={searchInput} onChange={(e) => { handleChange(e) }}/>
                <button type="button" onClick={(e)=>{searchButton(e)}}>Search</button>
            </form>
            
        </>
    )
}