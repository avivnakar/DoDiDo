import React, { Component } from 'react'
import { BoardsList } from '../cmps/board/BoardsList.jsx';


export class Boards extends Component {
    componentDidMount() {
        this.loadBoards()
    }

    loadBoards = () => {
        this.props.loadBoards()
    }

    render() {
        return (
            <div className="list-container">
               <BoardsList boards={this.props.boards}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        boards: state.Boards.boards,
        filter: state.Boards.filter
    }
}
const mapDispatchToProps = {
    loadBoards
}
export default connect(mapStateToProps, mapDispatchToProps)(Boards)