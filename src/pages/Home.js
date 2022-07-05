import React, { useState }from "react";
import Header from "../components/header";
import Card from "../components/Card";
import FilterButton from "../components/FilterButton"
import movies from '../components/movies'




// filter 
//const allCategories = ['all', ...movies.map(item => item.category)]

//console.log(allCategories);

 //filter
//const [filterButton, setFilterButton] = useState(allCategories);
//const [filterCategory, setMenuItem] = useState(movies)

//const filter = filterbtn => {
    //const filterList = filterCategory.filter(items => items.category === filterbtn)
    //setMenuItem(filterList)
//}
//<button button={ filterButton } filter={filter} ></button>

const Home = () => {
    return(
        <div className="home_page">
            <Header></Header>
            
            <Card ></Card>

        </div>
    );
}

export default Home ;