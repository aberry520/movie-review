export const MovieInfo = ({title,rating,year,poster,plot}) => {
    return (
        <>
            <h1>{title}</h1>
            <p>{rating}</p>
            <p>{year}</p>
            <p>{plot}</p>
            <img src={poster} />
        </>
    )
}