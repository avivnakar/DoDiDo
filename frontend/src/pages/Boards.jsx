import React, { Component } from 'react'
import { BoardsList } from '../cmps/board/BoardsList.jsx';
import {connect} from 'react-redux';
export class _Boards extends Component {
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
        // boards: state.Boards.boards,
        boards:[{_id:'1',name:'rondelicious'}],
        // filter: state.Boards.filter
        loadBoards:function(){console.log('loading boards')}
    }
}
const mapDispatchToProps = {}
export const Boards = connect(mapStateToProps, mapDispatchToProps)(_Boards)