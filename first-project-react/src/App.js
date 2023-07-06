import React from 'react'
import Header from './components/header'
import Users from './components/users'
import AddUser from './components/addUser'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [
                {
                    id: 1,
                    firstName: 'Luice',
                    lastName: 'Scholz',
                    bio: 'lorem ipsilum set amet',
                    age: 12,
                    isHappy: true,
                }, {
                    id: 2,
                    firstName: 'Sacha',
                    lastName: 'Schmidt',
                    bio: 'lorem ipsilum set amet',
                    age: 16,
                    isHappy: false,
                }, {
                    id: 3,
                    firstName: 'Peter',
                    lastName: 'Schmolke',
                    bio: 'lorem ipsilum set amet',
                    age: 33,
                    isHappy: false,
                },
            ],
        }
        this.addUser = this.addUser.bind(this)
    }
    render() {
        return (<div>
            <Header title='Список пользователей' />
            <main>
                <Users users={this.state.users} />
            </main>
            <aside>
                <AddUser onAdd={this.addUser} />
            </aside>
        </div>)
    }
    addUser(user) {
        const id = this.state.users.length + 1
        this.setState({
            users: [...this.state.users, { id, ...user }]
        })
    }
}

export default App