//First, import useState from React:

import { useState } from 'react';

export default function MyApp() {
  return (
    <div>
      <h1>Counters that update separately</h1>
      <MyButton />
      <MyButton />
    </div>
  );
}

// You’ll get two things from useState: the current state (count), 
// and the function that lets you update it (setCount). You can give them any names,
//  but the convention is to write [something, setSomething].
// The first time the button is displayed, 
// count will be 0 because you passed 0 to useState().
//  When you want to change state, call setCount() 
// and pass the new value to it. Clicking this button will increment the counter:

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}