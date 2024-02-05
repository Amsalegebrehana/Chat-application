import robotImg from '../assets/img/Image_129.svg';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('test@gmail.com');
    const [password, setPassword] = useState('Password123!');

    const handleLogin = () => {
        // Retrieve stored user credentials from localStorage
        const storedEmail = localStorage.getItem('userEmail');
        const storedPassword = localStorage.getItem('userPassword');

        // Check if entered credentials match stored values
        if (email === storedEmail && password === storedPassword) {
            console.log('Login successful');
            // Redirect to the chat page after login
            navigate('/chat');
        } else {
            console.log('Login failed. Invalid credentials.');
        }
    };

    return (
        <div className="bg-white flex ">
            <div className='w-full sm:w-full md:w-1/4  lg:w-1/4  xl:w-1/4 flex mx-7 items-center'>
                <form className=" w-full">
                    <div className='flex justify-center mt-24 sm:mt-24 md:mt-1 lg:mt-1 xl:mt-1'>

                        <p className= ' text-white font-thin text-xs mb-10 w-18 h-14 bg-purple py-5 px-1 rounded-md text-center'>CHATBOT</p>
                    </div>
                    <h1 className='font-bold mb-10 text-center text-4xl text-gray'>Log In</h1>
                    <div className="mb-4">
                        <label className="block text-red text-sm font-thin mb-2" htmlFor="username">
                        Email
                        </label>
                        <input className="shadow appearance-none border border-white rounded w-full  text-gray py-4 px-3 font-thin  leading-tight " 
                            id="email" 
                            type="email" 
                            placeholder="Email" 
                            value={email}
                            onChange={(e) => setEmail('test@gmail.com')}
                        />
                    </div>

                    <div className="mb-6 mt-2">
                        <label className="block text-red text-sm font-thin mb-2" htmlFor="password">
                            Password
                        </label>
                        <input className="shadow-md border border-white appearance-none  rounded w-full py-5 px-3 text-gray mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                        id="password" 
                        type="password" placeholder="**********" 
                        value={password}
                        onChange={(e) => setPassword('Password123!')}
                        />
              
                    </div>
                    <div className='mt-2 flex justify-end'>
                        <a className="inline-block align-baseline font-normal text-sm text-blue hover:text-blue" href="/forgot_password">
                            Forgot Password?
                        </a>
                    </div>
                    <div className="w-full">
                        <button 
                        className="bg-blue w-full mt-5 hover:bg-blue text-white font-normal text-center py-2 px-4 rounded " 
                        type="button"
                        onClick={() => handleLogin()}>
                            Log In
                        </button>
                        
                    </div>
                    <div className='mt-10 flex justify-start'>
                        <a className="inline-block align-baseline font-thin text-sm text-blue hover:text-blue" href="/signup">
                            Don't have an account? Sign Up
                        </a>
                    </div>
                </form>
            </div>
            <div className='hidden  md:hidden lg:w-3/4 xl:w-3/4 lg:flex h-full  aspect-w-3 aspect-h-4'>
                <img src={robotImg} alt="" className='w-full h-full object-cover'/>
            </div>
        </div>
    )
}

export default Login;
