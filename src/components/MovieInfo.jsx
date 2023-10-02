import styled from "styled-components"

const MovieList = styled.div`
        
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 10px;  
        max-width: 65ch;
        
        li {
            max-width: fit-content;
        }
        label{
            display: flex;
            flex-direction: column;
        }
    `
const Card = styled.div`
    max-width: fit-content;
    display: grid;
    grid-template-columns: auto auto;
    gap: 10px;
    justify-content: flex-start;
    margin: 10px;
    padding: 10px;
    color: #ffffffe6;
    border-radius: 20px;
    width: 90%;
    object-fit: fill;
    box-shadow: 5px 5px 5px black;
    /* background-image: url({poster}); */
        @media (max-width: 500px){
            grid-template-columns: auto;
        }
    .movieInfo{
        width: 40%;
        text-align: left;
        height: auto;
    }
   background-color: #2a71a7d9;
   img{
    /* border-radius: 10px; */
    box-shadow: 5px 5px 5px black; 
   }
   /* display: flex; */
   /* background: no-repeat center center fixed; */
    `
const Review = styled.div`
form{
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 20vh;
}
    textarea{
        height: 50%;
        width: 40%;
    }

`
//style={{ backgroundImage: `url(${poster})` }}
export const MovieInfo = ({ title, rating, year, poster, plot }) => {
    return (
        <>
            <Card >
                <img src={poster} />
                <MovieList>
                    <h1>{title}</h1>
                    <p>{rating}</p>
                    <p>{year}</p>
                    <p>{plot}</p>
                </MovieList>
            </Card>
            <Review>
                <form>
                    <textarea placeholder="Leave your review" />
                </form>
            </Review>
        </>
    )
}