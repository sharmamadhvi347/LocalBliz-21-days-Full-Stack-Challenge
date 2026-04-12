import { useState } from 'react';

export default function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counters that update together</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}

function MyButton({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}

//When you click the button, the onClick handler fires. Each button’s onClick prop was set to the 
//handleClick function inside MyApp, so the code inside of it runs. That code calls setCount(count + 1), 
//incrementing the count state variable. The new count value is passed as a prop to each button, so they all
//show the new value. This is called “lifting state up”. By moving state up, you’ve shared it between components.
