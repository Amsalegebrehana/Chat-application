import robotImg from '../assets/img/Image_129.svg';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Forgotpassword = () => {
    const navigate = useNavigate();

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleResetPassword = () => {
       
        console.log('Resetting password with:', password, confirmPassword);
        navigate('/');
    };

    return (
        <div className="bg-white flex ">
            <div className='w-full sm:w-full md:w-1/4  lg:w-1/4  xl:w-1/4 flex mx-7 items-center'>
                <form className=" w-full">
                    <div className='flex justify-center mt-24 sm:mt-24 md:mt-1 lg:mt-1 xl:mt-1'>

                        <p className= ' text-white font-thin text-xs mb-10 w-18 h-14 bg-purple py-5 px-1 rounded-md text-center'>CHATBOT</p>
                    </div>
                    <h1 className='font-bold mb-10 text-center text-4xl text-gray'>Reset Password</h1>
                    
                    <div className="mb-6 mt-2">
                        <label className="block text-red text-sm font-thin mb-2" htmlFor="password">
                            New Password
                        </label>
                        <input
                            className="shadow-md border border-white appearance-none rounded w-full py-5 px-3 text-gray mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="**********"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="mb-6 mt-2">
                        <label className="block text-red text-sm font-thin mb-2" htmlFor="confirmpassword">
                            Confirm New Password
                        </label>
                        <input
                            className="shadow-md border border-white appearance-none rounded w-full py-5 px-3 text-gray mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="confirmpassword"
                            type="password"
                            placeholder="**********"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                    
                    <div className="w-full">
                        <button
                            className="bg-blue w-full mt-5 hover:bg-blue text-white font-normal text-center py-2 px-4 rounded"
                            type="button"
                            onClick={handleResetPassword}>
                            Reset Password
                        </button>
                    </div>
                    
                </form>
            </div>
            <div className='hidden md:w-3/4 lg:w-3/4 xl:w-3/4 md:flex h-full'>
                <img src={robotImg} alt="" className='w-full h-full'/>
            </div>
        </div>
    )
}

export default Forgotpassword;
