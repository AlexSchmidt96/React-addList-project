import React from 'react'

class AddUser extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            bio: '',
            age: 1,
            isHappy: false,
        }
    }
    user = this.props.user
    render() {
        return (
            <form>
                <input placeholder='First name' onChange={(event) => {
                    this.setState({ firstName: event.target.value })
                }} />
                <input placeholder='Last name' onChange={(event) => {
                    this.setState({ lastName: event.target.value })
                }} />
                <textarea placeholder='Bio' onChange={(event) => {
                    this.setState({ bio: event.target.value })
                }}></textarea>
                <input placeholder='Age' onChange={(event) => {
                    this.setState({ age: event.target.value })
                }} />
                <label htmlFor='isHappy' >happy?</label>
                <input type='checkbox' id='isHappy' onChange={(event) => {
                    this.setState({ isHappy: event.target.checked })
                }} />
                <button type='button' onClick={() => this.props.onAdd({
                    firstName: this.state.firstName,
                    lastName: this.state.lastName,
                    bio: this.state.bio,
                    age: this.state.age,
                    isHappy: this.state.isHappy,
                })}>add</button>
            </form>
        )
    }
}

export default AddUser