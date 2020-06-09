import React from "react";
import Icon from "@material-ui/core/Icon";
import {Card,Button,TextareaAutosize} from "@material-ui/core";


class TrelloActionButton extends React.Component {
    state={
        formOpen : false,
        text: null
    }
    openForm=()=>{
        this.setState({formOpen: true})
    }
    closeForm=()=>{
        this.setState({formOpen: false})
    }
    handleChange=(e)=>{
        this.setState({text: e.target.value})
    }
     renderForm=()=>{
        const {list}=this.props
         const placeholder= list? 'Add list title': 'Enter card title'
         const buttonTitle= list? 'Add list':'Add card'
         const styles={
             buttonContainer:{
                 display: 'flex',
                 alignItems:'center',
                 marginTop:8,
                 marginLeft:8,
             }
         }
         return(<div>
             <Card style={{
                 overflow: 'visible',
                 minHeight:80,
                 maxWidth:272,
                 padding:"6px 8px 2px",
                 margin: 5,
             }}>
                 <TextareaAutosize
                     placeholder={placeholder}
                     autoFocus
                     onBlur={()=>this.closeForm()}
                     velue={this.state.text}
                     onChange={this.handleChange}
                     style={
                         {
                             resize: 'none',
                             width: "100%",
                             outline: 'none',
                             border:'none'
                         }
                     }
                 />
             </Card>
             <div style={styles.buttonContainer}>
                 <Button variant="contained" style={{backgroundColor:'#5aac44', color:'white'}}>
                     {buttonTitle}
                 </Button>
                 <Icon style={{cursor:'pointer'}}>close</Icon>
             </div>
         </div>)
    }
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
            },

        }
        return (
            <div onClick={this.openForm} style={styles.buttonStyle}>
                <Icon>add</Icon>
                {buttonText}
            </div>
        )
    }


    render() {
        return this.state.formOpen? this.renderForm() : this.renderAddButton()
    }


}
export default TrelloActionButton