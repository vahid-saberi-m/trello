import React from "react";
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
const TrelloCard = ({text})=>{
    return(
        <div>
            <Card variant="outlined">
                    <Typography  color="textSecondary" gutterBottom>
                        {text}
                    </Typography>
            </Card>
        </div>
    )
}

const styles={

}


export default TrelloCard