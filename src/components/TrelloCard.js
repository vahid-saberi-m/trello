import React from "react";
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from "@material-ui/core/CardContent";
import {Draggable} from "react-beautiful-dnd";

const TrelloCard = ({text, id, index}) => {

    return (
        <Draggable  draggableId={String(id)} key={id} index={index}>
            {provided => (
                <div ref={provided.innerRef}
                     {...provided.droppableProps}
                     {...provided.dragHandleProps}
                >
                    <Card style={styles.cardContainer} variant="outlined">
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                {text}
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
            )}

        </Draggable>
    )
}

const styles = {
    cardContainer: {
        margin: 5,
        minWidth: 272
    }
}


export default TrelloCard