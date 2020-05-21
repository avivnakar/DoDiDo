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
    }
    handleKeyDown(e) {
        var newDesc = ''
        if (!e.target.value) newDesc = this.state.desc
        else newDesc = e.target.value
        if (e.key === 'Enter') {
            this.setState({
                isEdit: null,
                desc: newDesc
            })
        }
    }
    getDesc() {
        if (this.state.desc && !this.state.isEdit) {
            return <div onClick={() => this.onEdit()}>{this.state.desc}</div>
        } else if (this.state.desc) return <input placeholder={this.state.desc} onKeyDown={(e) => { this.handleKeyDown(e) }} />
        else return <input placeholder="Add a more detailed description" onKeyDown={(e) => { this.handleKeyDown(e) }} />
    }
    render() {
        return (
            this.getDesc()
        )
    }
}

