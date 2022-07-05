import React from "react";

function FilterButton({FilterButton, filter}) {

    return(
        <div>
            {
                FilterButton.map((cat, i) =>{
                    return <button type="button" onClick={()=> filter(cat)}> {cat}  </button>
                })
            }
        </div>
    )
}