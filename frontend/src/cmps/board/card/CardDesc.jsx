import React, { Component } from 'react'

export class CardDesc extends Component {
    state = {
        desc: this.props.desc,
        isEdit: null
    }
    onEdit() {
        this.setState({
            isEdit: true
        })
        console.log(this.state.isEdit);
        
    }
    getDesc() {
        if (this.state.desc && !this.state.isEdit) {
            return <div onClick={()=> this.onEdit()}>{this.state.desc}</div>
        } else if (this.state.desc) return <input placeholder={this.state.desc} />
        else return <input placeholder="Add a more detailed description" />
    }
    render() {
        return (
            this.getDesc()
        )
    }
}

