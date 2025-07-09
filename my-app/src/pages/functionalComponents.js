import React, {useState} from 'react';

const Welcome = (prop) => {
    return <h2>Welcome! {prop.name}</h2>
}

export const Thankyou = () => {
    return <h2>Thank you Umair</h2>
}

export const Hello = ({name}) => {
    return <h2>Hello! {name}</h2>
}

//List rendering using maps(using props)
export const FriendList = () => {
    const friends = ["Umair", "Ali", "Abdullah", " Usman"];
    return(
        <>
        <h2>List Rendering Using Props</h2>
        <ul>
            {friends.map((friend, index) => (
                <li key={index}>{friend}</li>
            ))}
        </ul>
        </>
    );
};

export default Welcome;