import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const correctEmail = 'abc@gmail.com';
  const correctPassword = 'password';

  useEffect(() => {
    toast.info("Please login");
  }, []);

  useEffect(() => {
    if (isLoggedIn) {
      console.log("Third useEffect variant triggered.");
    
    }
  }, [isLoggedIn]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === correctEmail && password === correctPassword) {
      toast.success('Login successful...!!!');
      setIsLoggedIn(true);
    } else {
      toast.error('Enter correct Email and Password');
    }
  };

  const handleForgotPassword = () => {
    toast.warn("This function is not available currently");
  };

  return (
    <>
      <div className='min-h-screen bg-gradient-to-br from-orange-400 flex items-center justify-center p-4'>
        <div className='max-w-md w-full bg-white rounded-lg shadow-lg p-8'>
          <div className='text-center mb-8'>
            <h1 className='text-gray-600 mt-2 text-xl font-semibold'>Login Page</h1>
          </div>

          <form onSubmit={handleSubmit} className='space-y-6'>
            <div>
              <label htmlFor='email' className='block text-sm font-medium text-gray-700 mb-2'>Email :</label>
              <input
                type='email'
                value={email}
                className='w-full px-4 py-3 border border-gray-300 rounded focus:ring focus:ring-blue-500'
                placeholder='Enter your Email'
                required
                onChange={(e) => setEmail(e.target.value)}
              />

              <label htmlFor='password' className='block text-sm font-medium text-gray-700 mb-2 mt-4'>Password :</label>
              <input
                type='password'
                value={password}
                className='w-full px-4 py-3 border border-gray-300 rounded focus:ring focus:ring-blue-500'
                placeholder='Enter your Password'
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className='flex justify-between space-x-4 pt-2'>
              <button
                type='submit'
                 onClick={handleSubmit}
                
                className='w-1/2 bg-green-500 text-white py-3 rounded-lg hover:bg-blue-300 transition duration-200'
              >
                LOGIN
              </button>

              <button
                type='button'
                onClick={handleForgotPassword}
                className='w-1/2 bg-purple-600 text-white py-3 rounded-lg hover:bg-pink-400 transition duration-200'
              >
                FORGOT PASSWORD
              </button>
            </div>
          </form>
        </div>
      </div>

      <ToastContainer position='top-right' autoClose={3000} />
    </>
  );
}

export default App;