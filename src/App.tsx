import './index.scss'
import { FC, Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';

const App: FC = () => {
  return (
    <div className="app">
      <Link to={'/'}>Main</Link>
      <Link to={'/about'}>About</Link>

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/'} element={<MainPageAsync />} />
          <Route path={'/about'} element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
