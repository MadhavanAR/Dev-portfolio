import logo from './logo.svg';
import './App.css';
import Home from './home';
import About from './About';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const config = createBrowserRouter([
  {path:"/home",element:<Home/>},
  {path:"/about",element:<About/>}
]);

function App() {
  const getUser=async ()=>{
    let res = await fetch("https://reqres.in/api/users");
    let serverRes = await res.json();
    console.log(serverRes['data'])
  }
  return (
    <div className="App">

      {/* <RouterProvider config={config}/> */}
      <Home/>
      <About/>
      <button onClick={getUser}>click to get user</button>

    </div>
  );
}

export default App;