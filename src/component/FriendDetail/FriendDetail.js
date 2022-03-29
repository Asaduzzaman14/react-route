import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const { friendid } = useParams()
    const [friend, setFriend] = useState([])

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendid}`
        fetch(url)
            .then(res => res.json())
            .then(data => setFriend(data))
    }, [])

    return (
        <div style={{ border: '2px solid tomato', width: '400px', margin: "0 auto" }}>
            <h2>This is friend detail, friend No : {friendid}</h2>
            <div>
                <h2>name: {friend.name}</h2>
                <h3>Email: {friend.email}</h3>
                <h5>Phone: {friend.phone}</h5>
                <h5>City : {friend.address?.city}</h5>
                <h5>lat : {friend.address?.geo.lat}</h5>
            </div>
        </div>
    );
};

export default FriendDetail;