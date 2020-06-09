import React from "react";
import Icon from "@material-ui/core/Icon";


class TrelloActionButton extends React.Component {

    renderAddButton() {
        const {list} = this.props;
        const buttonText = list ? " another card" : " another list"
        const styles = {
            buttonStyle: {
                backgroundColor: list ? "rgba(0,0,0,.15)" : "inherit",
                color: list ? "white" : "inherit",
                opacity: list ? 1 : 0.5,
                display: 'flex',
                alignment: 'center',
                cursor:'pointer',
                borderRadius: 3,
                height:36,
                width: 272,
                paddingLeft:10,
            }

        }

        return (
            <div style={styles.buttonStyle}>
                <Icon>add</Icon>
                <p>{buttonText} </p>
            </div>
        )
    }


    render() {
        return this.renderAddButton()
    }


}
export default TrelloActionButton