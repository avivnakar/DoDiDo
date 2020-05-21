import React, { Component } from 'react'
import { MiniUser } from '../../MiniUser.jsx';

export class AddMembers extends Component {
    render() {
        return (
            <div>
              <MiniUser users={this.props.users}/>
            </div>
        )
    }
}
