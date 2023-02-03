import { FC, useState } from 'react';
import classes from './Counter.module.scss'

const Counter: FC = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <h1 className={classes.red}>{count}</h1>
      <button className={classes.btn} onClick={increment}>increment</button>
    </div>
  );
};

export default Counter;
