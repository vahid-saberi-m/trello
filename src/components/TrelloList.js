import React from "react";
import TrelloCard from "./TrelloCard";

const TrelloList= ({title , cards})=>{
    // console.log(cards)
    return(
        <div style={styles.container}>
            <h3>{title}</h3>

            { cards.map(card =><TrelloCard text={card.text} keys={card.id}/>)}
        </div>
    )
}


const styles={
    container:{
        backgroundColor: '#ccc',
        borderRadius:3,
        width: 300
    }
}


export default TrelloList