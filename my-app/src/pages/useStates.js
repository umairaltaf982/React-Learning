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

    return (
        <>
            <h3 style={{ color: isOnline ? '#00ff00' : '#FF0000' }}>{isOnline ? "You are online" : "You are offline"}</h3>
            <button onClick={updateStatus}>{isOnline ? 'Show Offline' : 'Show Online'}</button>
        </>
    )
}


// Dynamic List Rendering using useState
export const ListRenderingDynamic = () => {
    const [items, setItems] = useState(['apple', 'mango', 'orange']);
    const [newItems, setNewItems] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const [editIndex, setEditIndex] = useState(null);

    const handleAddItems = () => {
        if (newItems.trim() === "") return;
        setItems([...items, newItems]);
        setNewItems("");
    };

    const handleDeleteItems = (indexToDelete) => {
        const updatedItems = items.filter((_, index) => index !== indexToDelete);
        setItems(updatedItems);
    };

    const handleAllClear = () => {
        setItems([]);
    };

    const handleEditItem = (index) => {
        setNewItems(items[index]);
        setIsEditing(true);
        setEditIndex(index)
    }

    const handleUpdateItem = () => {
        if (newItems.trim() === "") return;

        const updatedItems = [...items];
        updatedItems[editIndex] = newItems;

        setItems(updatedItems);
        setNewItems("");
        setIsEditing(false);
        setEditIndex(null);
    };

    return (
        <div>
            <h2>Dynamic Fruit List</h2>
            <input
                type='text'
                placeholder='Enter the Fruit'
                value={newItems}
                onChange={(e) => setNewItems(e.target.value)}
            />
            <button onClick={handleAddItems}>Add Item</button>
            <button onClick={handleAllClear} disabled={items.length === 0} style={{ marginLeft: '10px' }}>Clear All</button>
            <button onClick={handleUpdateItem} disabled={!isEditing}>Update</button>

            {items.length === 0 ? (
                <p>No fruits in the list. Add some!</p>
            ) : (
                <ul>
                    {items.map((item, index) => (
                        <li key={index}>
                            {item}{" "}
                            <button onClick={() => handleDeleteItems(index)} style={{ marginLeft: '10px' }}>
                                Delete
                            </button>
                            <button onClick={() => handleEditItem(index)} style={{ marginLeft: '10px' }}>Edit</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}