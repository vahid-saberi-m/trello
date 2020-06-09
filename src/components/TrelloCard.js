import React from "react";
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from "@material-ui/core/CardContent";

const TrelloCard = ({text}) => {
    return (
            <Card style={styles.cardContainer} variant="outlined">
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                        {text}
                    </Typography>
                </CardContent>
            </Card>
    )
}

const styles = {
    cardContainer:{
        margin: 5,
    }
}


export default TrelloCard