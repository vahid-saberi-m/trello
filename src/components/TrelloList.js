import React from "react";
import TrelloCard from "./TrelloCard";
import TrelloActionButton from './TrelloActionButton'

const TrelloList= ({title , cards,listid})=>{
    return(
        <div  style={styles.container}>
            <h4 style={styles.listTitle}>{title}</h4>

            { cards.map(card =><TrelloCard  text={card.text} key={card.id}/>)}
            <TrelloActionButton listid={listid}/>
        </div>
    )
}


const styles={
    container:{
        backgroundColor: '#dfe3e6',
        borderRadius:3,
        width: 300,
        paddingBottom:10,
        margin: 5,
        height:"100%"
    },
    listTitle:{
        marginLeft: 10
    }
}


export default TrelloList