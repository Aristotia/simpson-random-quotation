import React from "react";

function DisplayQuote({simpson}){
    return(
        simpson && (
            <div className ='DisplayQuote'>
                <img src={simpson.image} alt={simpson.character} />
                <p><strong>{simpson.character}</strong></p>
                <p>{simpson.quote}</p>
            </div>
        )
    )
}

export default DisplayQuote;