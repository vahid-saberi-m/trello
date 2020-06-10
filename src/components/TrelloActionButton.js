import React from "react";
import Icon from "@material-ui/core/Icon";
import {Card,Button,TextareaAutosize} from "@material-ui/core";
import {connect} from "react-redux"
import {addList} from "../actions";

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
    handleAddList=e=>{
        const {dispatch}= this.props
        const {text} = this.state
        if(text){
            dispatch(addList(text))
        }
        return
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
                 <Button
                     onMouseDown={this.handleAddList}
                     variant="contained"
                     style={{backgroundColor:'#5aac44', color:'white'}}>
                     {buttonTitle}
                 </Button>
                 <Icon style={{cursor:'pointer'}}>close</Icon>
             </div>
         </div>)
    }
    renderAddButton() {
        const {list} = this.props;
        const buttonText = list ? "Add another list" : "Add another card"
        const styles = {
            buttonStyle: {
                backgroundColor: list ? "rgba(0,0,0,.15)" : "inherit",
                color: list ? "white" : "inherit",
                opacity: list ? 1 : 0.5,
                display: 'flex',
                alignItems: 'center',
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
export default connect() (TrelloActionButton)