export const MovieResults = ({search, imageClick}) => {
    return (
        <><ul>
        {
            
            search.map((item, index) =>
            
                <li key={index}><img src={item.Poster} onClick={() => { imageClick(index) }} /></li>
            )
            
        }</ul>
        </>
    )
}