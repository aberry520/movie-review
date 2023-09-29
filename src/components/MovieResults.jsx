import styled from "styled-components"
export const MovieResults = ({ search, imageClick }) => {
    const MovieCard = styled.li`
        /* background-color: blue; */
        max-width: fit-content;
        /* display: flex; */
        label{
            display: flex;
            flex-direction: column;
        }
       
    `
    const MovieList = styled.ul`
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    `
    return (
        <>
            <MovieList>
                {
                    search.map((item, index) =>
                        
                        <MovieCard key={index}>
                                <label>{item.Title}
                                    <br />
                                    <img src={item.Poster} onClick={() => { imageClick(index) }} />
                                </label>
                        </MovieCard>
                    )
                }
            </MovieList>
        </>
    )
}