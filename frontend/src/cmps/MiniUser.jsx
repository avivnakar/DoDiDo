import React from 'react';

export function MiniUser(props) {
    const { users } = props
    const initials=(name)=>name.split(' ')
    .reduce((initials,part)=>initials+=part.charAt(0),'')
    .toUpperCase();
        
    return (
        <ul className="mini-user-list">
            {users && users.map(({_id,imgUrl,fullName}) =>
                <li key={_id} className="mini-user">
                    <img className="mini-user-img"
                        src={require(`../assets/imgs/${imgUrl}`)}
                        alt={initials(fullName)} />
                    <span>{fullName}</span>
                </li>)}
        </ul>
    )
}
