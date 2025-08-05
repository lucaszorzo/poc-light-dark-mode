import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageOne from './views/pages/PageOne';
import PageTwo from './views/pages/PageTwo';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageOne />} />
        <Route path="/page-two" element={<PageTwo />} />
      </Routes>
    </Router>
  );
};

export default App;
