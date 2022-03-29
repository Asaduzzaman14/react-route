import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
const SingleFriend = ({ friend }) => {
    // console.log(friend, 'hello');
    const { username, name, id } = friend;

    const navigate = useNavigate();


    const showFriendDetail = () => {
        const path = `/Friend/${id}`
        navigate(path)
    }


    return (
        <div>
            <h1> name: {name}</h1>
            <Link to={'/Friend/' + id}> Show Detail</Link>
            <button onClick={showFriendDetail}>{username} id:{id}</button>
        </div>
    );
};

export default SingleFriend;