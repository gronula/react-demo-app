import './index.scss'
import { FC } from 'react';
import Counter from './components/Counter';

const App: FC = () => {
  return (
    <div className="app">
      <Counter />
    </div>
  );
};

export default App;
