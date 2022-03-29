import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleFriend = ({ friend }) => {
    // console.log(friend, 'hello');
    const { username, name, id } = friend;

    const navigate = useNavigate();


    const showFriendDetail = () => {
        const path = `/friend/${id}`
        navigate(path)
    }


    return (
        <div>
            <h1> name: {name}</h1>
            <button onClick={showFriendDetail}>{username} id:{id}</button>
        </div>
    );
};

export default SingleFriend;