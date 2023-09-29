import { useState } from "react"
import { MovieResults } from "./MovieResults"
import { MovieSearch } from "./MovieSearch"


export const Movie = () => {
    const [searchInput, setSearchInput] = useState();
    const [poster, setPoster] = useState();
    const [title, setTitle] = useState();
    const [year, setYear] = useState();
    const [rating, setRating] = useState();
    const [search, setSearch] = useState([]);
    const [dataVal, setDataVal] = useState();

    const handleChange = (e) => {
        setSearchInput(e.target.value)
    }
    const getSearchData = async () => {
        const apiUrl = `http://www.omdbapi.com/?s=${searchInput}&apikey=af468481`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.Error) {
            setSearch(data.Error);
            setDataVal(false);
        } else {
            setSearch(data.Search);
            setDataVal(true);
        }
    }
    const getSpecificData = async (index) => {
        const apiUrl = `http://www.omdbapi.com/?t=${search[index].Title}&apikey=af468481`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        setPoster(data.Poster);
        setTitle(data.Title);
        setYear(data.Released);
        setRating(data.Rated);
    };
    const searchButton = () => {
        getSearchData();
    };
    const imageClick = (index) => {
        getSpecificData(index);
        
    }
    // console.log(search[3].Title);
    return (
        <>
            <MovieSearch handleChange={handleChange} searchButton={searchButton} searchInput={searchInput} />
            <MovieResults />
            <h1>{title}</h1>
            <p>{rating}</p>
            <p>{year}</p>
            <img src={poster} />
            <ul>
                {
                    dataVal === false &&
                    (<p>{search} Please refine search.</p>)

                }
                {
                    dataVal === true &&
                    (search.map((item, index) =>
                        <li key={index}><img src={item.Poster} onClick={()=>{imageClick(index)}}/></li>
                    ))
                }
            </ul>
        </>
    )
}