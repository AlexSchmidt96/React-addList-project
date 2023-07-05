import React from 'react'
import Header from './components/header'
import Users from './components/users'

class App extends React.Component {
    render() {
        return (<div>
            <Header title='Список пользователей' />
            <main>
                <Users />
            </main>
            <aside></aside>
        </div>)
    }
}

export default App