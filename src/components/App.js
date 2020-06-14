import React, {Component} from "react";
import TrelloList from "./TrelloList";
import {connect} from 'react-redux'
import TrelloActionButton from "./TrelloActionButton";
import {DragDropContext} from 'react-beautiful-dnd'

class App extends Component {
    onDragEnd=()=>{

    }
    render() {
        const {lists} = this.props
        console.log(lists)
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                <div className="App" style={styles.listContainer}>
                    {lists.map(list =>
                        <TrelloList listid={list.id} cards={list.cards} title={list.title} key={"list"+list.id}/>)
                    }
                    <TrelloActionButton list/>
                </div>
            </DragDropContext>
        )
    }
}

const mapStateToProps = state => ({
    lists: state.lists
})

const styles = {
    listContainer: {
        display: 'flex',
        alignItems: 'top'
    }
}

export default connect(mapStateToProps)(App)