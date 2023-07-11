import React from 'react'

class AddUser extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            first_name: '',
            last_name: '',
            avatar: '',
            email: '',
            age: 1,
            isHappy: false,
        }
        this.user = this.props.user
        this.userAdd = {}
    }

    render() {
        return (
            <form ref={(element) => this.myForm = element} >
                <input placeholder='First name' onChange={(event) => {
                    this.setState({ first_name: event.target.value })
                }} />
                <input placeholder='Last name' onChange={(event) => {
                    this.setState({ last_name: event.target.value })
                }} />
                <input placeholder='Avatar url' onChange={(event) => {
                    this.setState({ avatar: event.target.value })
                }} />
                <textarea placeholder='email' onChange={(event) => {
                    this.setState({ email: event.target.value })
                }}></textarea>
                <input placeholder='Age' onChange={(event) => {
                    this.setState({ age: event.target.value })
                }} />
                <label htmlFor='isHappy' >happy?</label>
                <input type='checkbox' id='isHappy' onChange={(event) => {
                    this.setState({ isHappy: event.target.checked })
                }} />
                <button type='button' onClick={() => {
                    this.myForm.reset()
                    this.userAdd = {
                        first_name: this.state.first_name,
                        last_name: this.state.last_name,
                        avatar: this.state.avatar,
                        email: this.state.email,
                        age: this.state.age,
                        isHappy: this.state.isHappy,
                    }
                    this.user ?
                        this.userAdd.id = this.user.id :
                        this.props.onAdd(this.userAdd)
                }
                }>add</button>
            </ form>
        )
    }
}

export default AddUser