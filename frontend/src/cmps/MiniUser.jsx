import React, { Component } from 'react'

export function MiniUser(props) {
    const { users } = props
    return (
        <ul>
            {users && users.map(user =>
            <li key={user._id}>
                <img className="mini-user-img" src={require(`../assets/imgs/${user.imgUrl}`)} />
                <span>{user.fullName}</span>
            </li>)
                }
        </ul>
    )
}
