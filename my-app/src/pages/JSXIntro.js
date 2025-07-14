import React from 'react';

const JSXIntro = () => {
  const name = "Umair";
  const isLoggedIn = true;

  return (
    <div>
      <h1>Welcome to JSX, {name}!</h1>
      <p>{isLoggedIn ? "You're logged in." : "Please log in."}</p>
      <button onClick={() => alert('Button Clicked!')}>Click Me</button>
    </div>
  );
};

export default JSXIntro;
