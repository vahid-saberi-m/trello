import React from "react";
import TrelloCard from "./TrelloCard";
import TrelloActionButton from './TrelloActionButton'
import {Droppable} from "react-beautiful-dnd";

const TrelloList = ({title, cards, listid}) => {
    return (
        <Droppable droppableId={String(listid)} >
            {provided =>(
                <div {...provided.droppableProps} ref={provided.innerRef} style={styles.container}>
                    <h4 style={styles.listTitle}>{title}</h4>

                    {cards.map((card,index) => <TrelloCard
                        index={index}
                        text={card.text}
                        key={card.id}
                        id={"list"+listid+"card"+index}/>)}
                    <TrelloActionButton listid={listid}/>
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    )
}


const styles = {
    container: {
        backgroundColor: '#dfe3e6',
        borderRadius: 3,
        width: 300,
        paddingBottom: 10,
        margin: 5,
        height: "100%"
    },
    listTitle: {
        marginLeft: 10
    }
}


export default TrelloList