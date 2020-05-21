import React, { Component } from 'react'
import { CardDesc } from './CardDesc.jsx';
import { AddMembers } from './AddMembers.jsx';
import { CardTitle } from './CardTitle.jsx';
import { AddLabels } from './AddLabels.jsx';
import { CardLabel } from './CardLabel.jsx';
import { MiniUser } from '../../MiniUser.jsx';
import { connect } from 'react-redux';


class _CardDetails extends Component {
    state = {
        addTo: null
    }

    addMembers() {
        this.setState({
            addTo: 'members'
        })
    }

    render() {
        const { card, members } = this.props
        return (
            <section className="card-details">
                <div>
                    <CardTitle title={card.title}/>
                    <CardLabel />
                    {card.cardMembers && <div><MiniUser users={card.cardMembers}/><button>+Add</button></div>}
                    <div>
                        Description
                        <CardDesc desc={card.desc} />
                    </div>
                </div>
                <div className="card-btns">
                    <button onClick={() => this.addMembers()}>Members</button>
                    <button>Labels</button>
                    <button>Checklist</button>
                    <button>Due Date</button>
                    <button>Attachment</button>
                    {this.state.addTo === 'members' && <AddMembers boardUsers={members} cardMembers={card.cardMembers}/>}
                    {this.state.addTo === 'labels' && <AddLabels cardMembers={card.labels}/>}
                </div>
            </section>
        )
    }
}
const mapStateToProps = (state) => {
    
    // return {
    //     currCard
    // }
}

const mapDispatchToProps = {
    //update board/card
    //get card by id
}

export const CardDetails = connect(mapStateToProps, mapDispatchToProps)(_CardDetails)

