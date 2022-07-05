import React, { useState } from "react";
import '../styles/Card.css'
import movies from '../components/movies'


const Card = () =>  {
    
    const [list,updateList] = useState(movies)
    
    // like and deslike
    const[like, setLike] = useState(movies)
    const[dislike, setDislike] = useState(5)

    const[likeActive, setLikeActive] = useState(false)
    const[dislikesActive, setDislikeActive] = useState(false)
    
    function likef(){
        if(likeActive)
        {
            setLikeActive(false)
            setLike(like-1)
        }
        else
        {
            setLikeActive(true)
            setLike(like+1)
            if(dislikesActive)
            {
                setDislikeActive(false)
                setLike(like+1)
                setDislike(dislike-1)
            }
        }
    }

    function dislikef(){
        if(dislikesActive)
        {
            setDislikeActive(false)
            setDislike(dislike-1)
        }
        else
        {
            setDislikeActive(true)
            setDislike(dislike+1)
            if(likeActive)
            {
                setLikeActive(false)
                setDislike(dislike-1)
                setLike(like+1)
            }
        }
    }

    
    //permettant de supprimer 
    const removeList = e => {
        const del=e.target.getAttribute("removeList")
        updateList(list.filter(items=>items.id!==del));
    }

    
    return(
        
        <div className="movies_list">
           
            <ul>
           
                { list.map( card => {
                    return(

                        <li className="movie-card" key={card.id} >
                            <div className="movie-card card" >
                               
                                <h2 className="card_title"> {card.title}</h2>
                                <p> {card.category}</p>
                                <div>
                                    <div>
                                        <button onClick={likef}>like {like.likes} </button> 
                                        
                                    </div>
                                    <div>
                                        <button onClick={dislikef} >dislikes {dislike} </button>
                                        
                                    </div>
                                </div>
                                <div> <button removeList={card.id} onClick={ removeList }>Supprimer </button></div>
                            </div>
                            
                        </li>
    
                    )
                })}
                
            </ul>
        </div>
    );
}

export default Card ;