
import React, { useContext, useEffect } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Jobs from './pages/Jobs/Jobs';
import SpecificJobs from './pages/specificJobs/SpecificJobs';
import styled from 'styled-components';
import DarkModeContext from './contexts/Theme';


const App: React.FC = () => {

  const {theme} = useContext(DarkModeContext)
  return (
    <Router>
      
      <AppCont id='app' className={`${theme === 'light' ? '': 'darkMode'}`}>
    <Routes>
      <Route   path="/" element={<Jobs/>} />
      <Route path="/Jobs/:id" element={<SpecificJobs/>} />
    </Routes>
    </AppCont>
</Router>
  );
};

const AppCont = styled.div`
display: flex;
      min-height: 100vh;
    flex-direction: column;
    font-family: Kumbh Sans,sans-serif;
    color: var(--text-color);
    background-color: var(--app-bg-color);
`

export default App;
