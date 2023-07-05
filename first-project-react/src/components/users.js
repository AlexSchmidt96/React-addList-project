import React from 'react'

class Users extends React.Component {

    users = [
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
    ]
    render() {
        if (this.users.length > 0) {
            return (
                <div>
                    {this.users.map((elem) => (
                        <div className='user' key={elem.id}>
                            <h3>{elem.firstName} {elem.lastName}</h3>
                            <p>{elem.bio}</p>
                            <b>{elem.isHappy ? 'Happy :)' : 'not yet :('}</b>
                        </div>))}
                </div>
            )
        }
        else {
            return (
                <div className='user'>
                    <h3>
                        пользователей нет
                    </h3>
                </div>
            )
        }
    }
}

export default Users