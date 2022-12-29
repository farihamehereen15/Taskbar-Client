import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes';
import { useContext } from 'react';
import { themeContext } from './Context/Context';


function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='container' style={{
      background: darkMode ? "black" : "",
      color: darkMode ? "white" : "",
    }}>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
