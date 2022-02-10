import { Route, Routes } from 'react-router-dom';

import Header from './Components/Header';
import FeedbackList from './Components/FeedbackList';
import FeedbackStats from './Components/FeedbackStats';
import FeedbackForm from './Components/FeedbackForm';
import About from './Pages/About';
import AboutIconLink from './Components/AboutIconLink';

function App() {
 
  return (
    <>
      <Header />
      <div className='container'>
        <Routes>
          <Route
            exact
            path='/'
            element={
              <>
                <FeedbackForm  />
                <FeedbackStats />
                <FeedbackList  />
              </>
            }
          />
          <Route path='/about' element={<About />} />
        </Routes>
        <AboutIconLink />
      </div>
    </>
  );
}

export default App;
