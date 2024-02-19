import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import { Main, Testbed } from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <RootLayout>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/testbed" element={<Testbed />} />
        </Routes>
      </RootLayout>
    </BrowserRouter>
  );
};

export default App;
