export const MovieInfo = ({title,rating,year,poster}) => {
    return (
        <>
            <h1>{title}</h1>
            <p>{rating}</p>
            <p>{year}</p>
            <img src={poster} />
        </>
    )
}