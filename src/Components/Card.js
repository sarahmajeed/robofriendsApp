import React from 'react';

function Card({name, email, id}){

    return(
        <div className="tc bg-light-blue dib pa3 ma2 grow shadow-5">
            <img alt="robots" src={`https://robohash.org/${id}`}></img>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;