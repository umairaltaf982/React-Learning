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

export default Welcome;