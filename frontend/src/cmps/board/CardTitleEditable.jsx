import TextareaAutosize from 'react-textarea-autosize';
import React, { Component } from 'react';

export class CardTitleEditable extends Component {
    state = {
        txt: ''
    }
    componentDidMount() {
        console.log('CardTitleEditable', this);
        console.log('CardTitleEditable.render()', this.render());
        const { txt } = this.props;
        this.setState({ txt });
    }
    handleChange(ev) {
        ev.preventDefault();
        const { txt } = ev.target;
        this.setState({ txt })
    }
    render() {
        const { handleChange } = this
        const { editMode } = this.props;
        const { txt } = this.state
        return editMode ? <form onSubmit={handleChange} method="post">
            <TextareaAutosize dir="auto" className="card-title edit" onChange={handleChange} name="txt" value={txt} />
            <input className="submit-edit" type="submit" value="save" />
        </form>

            : <span className="card-title">{txt}</span>
    }
}