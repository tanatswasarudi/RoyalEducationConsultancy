import { Outlet } from "react-router-dom"; 
import "./App.css";
import Header from './Components/Header';
import { ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useEffect } from 'react';
import { setDataProduct } from './redux/productSlide';
import { useDispatch} from 'react-redux';
import Footer from './Components/Footer'
import FixedButton from "./Components/FixedButton";


function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_SERVER_DORMIN}/universities`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
        dispatch(setDataProduct(data));
      } catch (error) {
        console.error('Error:', error); 
      }
    })();
  }, []);

  const toastOptions = {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 3000,
    hideProgressBar: true,
    closeButton: false,
    toastStyle: {
      fontSize: '14px',
      fontWeight: 'bold',
      borderRadius: '4px',
    },
   
    toastClassName: 'custom-toast-container',
  };
  return (
  <div >
    <Header/>
    <main className="min-h-screen pt-20" >
      <Outlet/>
     <ToastContainer{...toastOptions} /> 
     <FixedButton/>
    <Footer/> 
    </main>     
    
  </div>
  );
}

export default App;