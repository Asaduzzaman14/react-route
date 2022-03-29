import React, { useEffect, useState } from 'react';
import SingleFriend from '../Singlefriend/SingleFriend';

const Friends = () => {
    const [friends, setFriends] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setFriends(data))
    }, [])

    return (
        <div>
            <h2>hello friends. how are you : {friends.length}  </h2>
            <p><small>where are you froms</small></p>
            {
                friends.map(friend => <SingleFriend
                    key={friend.id}
                    friend={friend} />)
            }
        </div>
    );
};

export default Friends;