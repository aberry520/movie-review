import styled from "styled-components"

const MovieList = styled.div`
        ul{
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;  
        }
        
        li {
            max-width: fit-content;
        }
        label{
            display: flex;
            flex-direction: column;
        }
    `
export const MovieResults = ({ search, imageClick }) => {
    return (
        <>
            <MovieList>
                <ul>
                {
                    search.map((item, index) =>

                        <li key={index}>
                            <label>{item.Title}
                                <br />
                                <img src={item.Poster} onClick={() => { imageClick(index) }} />
                            </label>
                        </li>
                    )
                }
                </ul>
            </MovieList>
        </>
    )
}