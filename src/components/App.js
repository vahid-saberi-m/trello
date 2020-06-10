import React , {Component} from "react";
import TrelloList from "./TrelloList";
import { connect } from 'react-redux'
import TrelloActionButton from "./TrelloActionButton";
class App extends Component{
    render(){
        const {lists}= this.props
        console.log(lists)
        return(
            <div className="App" style={styles.listContainer}>
                { lists.map(list=>
                    <TrelloList cards={list.cards} title={list.title} key={list.id}  />)
                }
                <TrelloActionButton list/>
            </div>
    )
    }
}

const mapStateToProps= state => ({
    lists: state.lists
})

const styles = {
    listContainer:{
        display: 'flex',
        alignItems: 'top'
    }
}

export default connect(mapStateToProps)(App)