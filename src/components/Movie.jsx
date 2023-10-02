import { useEffect, useState } from "react"
import { MovieResults } from "./MovieResults"
import { MovieSearch } from "./MovieSearch"
import { MovieInfo } from "./MovieInfo"
import { MovieHome } from "./MovieHome"

export const Movie = () => {
    const [searchInput, setSearchInput] = useState("");
    const [poster, setPoster] = useState();
    const [title, setTitle] = useState();
    const [year, setYear] = useState();
    const [rating, setRating] = useState();
    const [search, setSearch] = useState([]);
    const [plot, setPlot] = useState();
    const [dataError, setDataError] = useState();
    const [homeDisplay, setHomeDisplay] = useState([]);

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
        setPage("MovieInfo");
        const apiUrl = `http://www.omdbapi.com/?i=${search[index].imdbID}&apikey=af468481&plot=full`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (data.Poster === "N/A") {
            setPoster("../public/images/blank-poster.jpeg")
        } else {
            setPoster(data.Poster);
        }

        setTitle(data.Title);
        setYear(data.Released);
        setRating(data.Rated);
        setPlot(data.Plot);
    };
    const getSpecificHomeData = async (index) => {
        setPage("MovieInfo");
        const apiUrl = `http://www.omdbapi.com/?i=${homeDisplay[index].imdbID}&apikey=af468481&plot=full`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (data.Poster === "N/A") {
            setPoster("../public/images/blank-poster.jpeg")
        } else {
            setPoster(data.Poster);
        }

        setTitle(data.Title);
        setYear(data.Released);
        setRating(data.Rated);
        setPlot(data.Plot);
    };
    const randomID = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }
    const WORD_ARR = ["Love",
        "Day",
        "Night",
        "Life",
        "Time",
        "Man",
        "Woman",
        "Story",
        "World",
        "Heart",
        "Home",
        "City",
        "Game",
        "Star",
        "Island",
        "Road",
        "Secret",
        "Adventure",
        "Journey"]
    const getHomeData = async () => {

        const apiUrl = `http://www.omdbapi.com/?S=${WORD_ARR[randomID(0, 19)]}&apikey=af468481&page=${randomID(1, 3)}&type=movie`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        setHomeDisplay(data.Search);
        ////////////////     
        // setPoster();
        // setTitle();
        // setYear();
        // setRating();
        // setPlot();
        setPage();
    }
    const searchButton = () => {
        getSearchData();
        setPage("MovieResults");
        setSearchInput("");
        // setPoster();
        // setTitle();
        // setYear();
        // setRating();
        // setPlot();
        setHomeDisplay([]);

    };
    const imageClick = (index) => {
        getSpecificData(index);
        setSearch([]);
    }
    const homeImageClick = (index) => {
        getSpecificHomeData(index);
        setHomeDisplay([]);
    }
    const [page, setPage] = useState();
    console.log(page);
    return (
        <>
            {<MovieSearch handleChange={handleChange} searchButton={searchButton} searchInput={searchInput} getHomeData={getHomeData} />}
            <MovieHome homeDisplay={homeDisplay} homeImageClick={homeImageClick} getHomeData={getHomeData} searchInput={searchInput} />

            {
                page === "MovieInfo" &&
                (<MovieInfo title={title} rating={rating} year={year} poster={poster} plot={plot} />)
            }
            {
                page !== "MovieInfo" &&
                ("")
            }
            {
                dataError === true &&
                (<p>{search} Please refine search.</p>)
            }
            {
                page === "MovieResults" &&
                (
                    dataError === false &&
                    <MovieResults search={search} imageClick={imageClick} />
                )
            }

        </>
    )
}