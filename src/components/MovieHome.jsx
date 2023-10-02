import { useEffect } from "react"
import styled from "styled-components"

const MovieList = styled.div`
        ul{
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            gap: 10px;  
        }
        
        li {
            max-width: fit-content;
        }
        label{
            display: flex;
            flex-direction: column;
            max-width: 300px;
        }
    `

export const MovieHome = ({homeDisplay, homeImageClick, getHomeData, searchInput}) => {
    useEffect(()=>{
        getHomeData()
    },[])
    const ifPoster = (item)=>{
        if (item.Poster === "N/A"){
            return "../public/images/blank-poster.jpeg"
        } else {
            return item.Poster
        }
    }
    return (
        <>
            <MovieList>
                <ul>
            {
                searchInput == "" &&
                (homeDisplay.map((item, index) =>

                    <li key={index}>
                        <label>{item.Title}
                            <br />
                            <img src={ifPoster(item)} onClick={() => { homeImageClick(index) }} />
                        </label>
                    </li>
                ))
            }
            </ul>
</MovieList>
        </>
    )
}