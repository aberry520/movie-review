import { useEffect } from "react"

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

        </>
    )
}