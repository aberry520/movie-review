import { useState } from "react"
import { MovieResults } from "./MovieResults"
import { MovieSearch } from "./MovieSearch"
import { MovieInfo } from "./MovieInfo"
import { MovieHome } from "./MovieHome"

export const Movie = () => {
    const [searchInput, setSearchInput] = useState();
    const [poster, setPoster] = useState();
    const [title, setTitle] = useState();
    const [year, setYear] = useState();
    const [rating, setRating] = useState();
    const [search, setSearch] = useState([]);
    const [dataError, setDataError] = useState();

    const handleChange = (e) => {
        setSearchInput(e.target.value)
    }
    const getSearchData = async () => {
        const apiUrl = `http://www.omdbapi.com/?s=${searchInput}&apikey=af468481`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.Error) {
            setSearch(data.Error);
            setDataError(true);
        } else {
            setSearch(data.Search);
            setDataError(false);
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
        setSearchInput("");
        setPoster();
        setTitle();
        setYear();
        setRating();
    };
    const imageClick = (index) => {
        getSpecificData(index);
        setSearch([]);
    }
    // console.log(search[3].Title);
    return (
        <>
            <MovieSearch handleChange={handleChange} searchButton={searchButton} searchInput={searchInput} />
            <MovieHome />
            <MovieInfo title={title} rating={rating} year={year} poster={poster} />
            {
                dataError === true &&
                (<p>{search} Please refine search.</p>)
            }
            {
                dataError === false &&
                <MovieResults search={search} imageClick={imageClick} />
            }

        </>
    )
}