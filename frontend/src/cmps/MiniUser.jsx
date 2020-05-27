import React from 'react';

export function MiniUser(props) {
    const { users, command, isOpen } = props
    const initials = (name) => name.split(' ')
        .reduce((initials, part) => initials += part.charAt(0), '')
        .toUpperCase();

    return (
        <ul className="mini-user-list flex align-center">
            {users && users.map(({ _id, imgUrl, fullName }) =>
                <li key={_id} className="mini-user" onClick={() => command(_id)}>
                    <img className="mini-user-img"
                        src={require(`../assets/imgs/${imgUrl}`)}
                        alt={initials(fullName)} />
                    {isOpen && <span className="user-name">{fullName}</span>}
                </li>)}
        </ul>
    )
}
