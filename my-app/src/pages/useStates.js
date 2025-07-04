import React, { useState } from 'react';

// single state
export const Counter = () => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    }

    const decrementCount = () => {
        if (count !== 0)
            setCount(count - 1);
    }

    return (
        <div>
            <h2>Counter App</h2>
            <button onClick={decrementCount}>-</button>
            {count}
            <button onClick={incrementCount}>+</button>
        </div>
    )
};



//Multiple States (Mostly used in development due to its convenience)
export const ProfileManagement = () => {
    const [name, setName] = useState("Umair");
    const [age, setAge] = useState(25);

    const updateProfile = () => {
        setName("Umair Altaf");
        setAge(35)
    }

    return (
        <>
            <h2>Profile Management:</h2>
            <h3>Name: {name}</h3>
            <h3>Age: {age}</h3>
            <button onClick={updateProfile}>Update Profile</button>
        </>
    )
};



//Single object states
export const CarUpdation = () => {
    const [update, setUpdate] = useState({
        name: "BMW",
        model: 2005
    })

    const manageUpdate = () => {
        setUpdate({ ...update, name: "BMW M5", model: 2025 })
    }

    return (
        <>
            <h2>Car Management:</h2>
            <h3>Name: {update.name}</h3>
            <h3>Model: {update.model}</h3>
            <button onClick={manageUpdate}>Update Car</button>
        </>
    )
};

//Conditional Rendering and State MAnagement(UseState)
export const ToggleTheme = () => {
    const [isDark, setIsDark] = useState(false);

    const updateTheme = () => {
        setIsDark(prevMode => !prevMode);
    }

    return (
        <div style={{ backgroundColor: isDark ? '#333' : '#fff', color: isDark ? '#fff' : '#000' }}>
            <h3>{isDark ? 'Dark Mode' : 'Light Mode'}</h3>
            <button onClick={updateTheme}>Toggle Mode</button>
        </div>
    )
}


export const ProfileStatus = () => {
    const [isOnline, setIsOnline] = useState(false);
    
    const updateStatus = () => {
        setIsOnline(prevStatus => !prevStatus);
    }

    return(
        <>
            <h3 style={{color: isOnline? '#00ff00': '#FF0000'}}>{isOnline ? "You are online" : "You are offline"}</h3>
            <button onClick={updateStatus}>{isOnline ? 'Show Offline' : 'Show Online'}</button>
        </>
    )
}