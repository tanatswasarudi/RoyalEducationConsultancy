import React,{useState} from 'react'
import { Link,useNavigate  } from 'react-router-dom'
import { BiShowAlt, BiHide } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { toast } from "react-toastify"
import {BiSolidLockAlt} from 'react-icons/bi'
import {useDispatch, useSelector} from 'react-redux'
import {loginRedux} from '../redux/userSlice'
import login from '../Assets/login.gif'


const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate()
    const handleShowPassword = () => {
        setShowPassword((preve) => !preve);
      };
      const [data, setData] = useState({
        email: "",
        password: ""
      });
      const userData = useSelector(state => state.user )
      const dispatch = useDispatch()
      const handleOnChange = (e)=>{
        const {name,value}=e.target
        setData((preve)=>{
            return{
                    ...preve,
                    [name] : value
            }})}
            const handleSubmit = async (e) => {
              e.preventDefault();
            
              const {name,email,password} = data
              if(name && email && password){
                const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DORMIN}/login`,{
                  method : "POST",
                  headers : {
                      "content-type" : "application/json"
                  },
                  body : JSON.stringify(data)
              })
              
              const Resdata = await fetchData.json()
              console.log(Resdata)
              toast(Resdata.message)
              alert("Login Succesful")
                      if(Resdata.alert){
                        dispatch(loginRedux(Resdata))
                        setTimeout(()=>{
                          navigate("/account")
                        },1000)
                      }
                      console.log(userData)
              }
              else{
                alert("Enter required fields")
            }
         }
  return (
    <div className='mt-4 grow flex items-center justify-around'>
        <div className="mb-64">
        <div className="w-20 h-20 mx-auto">
          <img src={login} alt="" className='rounded-full w-full h-full' />
        </div>
      <form className='max-w-md mx-auto' onSubmit={handleSubmit}>
      <label htmlFor='email' className='px-3 font-serif'>Email</label>
        <div className='flex items-center w-full border my-1 py-2 px-3 rounded-full'>
              <span>
              <MdEmail className="text-md " />
              </span>
              <input type='email' name='email' placeholder='johndoe@gmail.com' className=' w-full outline-none'value={data.email} onChange={handleOnChange}/>  
         </div>
         <label htmlFor='password' className='px-3 mt-4 font-serif'>Password</label>
        <div className='flex items-center w-full border my-1 py-2 px-3 rounded-full'>
        <span> 
          <BiSolidLockAlt/>
        </span> 
            <input   type={showPassword ? "text" : "password"} name='password' placeholder='*******' className=' w-full outline-none' value={data.password}onChange={handleOnChange}/>   
            <span className="flex text-xl" onClick={handleShowPassword}>
              {showPassword ? <BiShowAlt /> : <BiHide />}
            </span>
            </div>
       
        <button type='submit' className='primary'>Login</button>
        <p className='mt-4 px-2'>Don't Have an Account ? <Link to='/register' className='text-blue-500'>Register</Link> </p>
      </form>
      </div>
    </div>
  )
}

export default Login
