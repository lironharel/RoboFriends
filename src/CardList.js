import React from "react";
import Card from './Card';

const CardList = ({robots}) => { 
    const cardsArray = robots.map((card) => { 
        return <Card key={card.id} id={card.id} name={card.name} email={card.email} />
    });
    return(
        <div >
            {cardsArray}
        </div>
    )
}

export default CardList;