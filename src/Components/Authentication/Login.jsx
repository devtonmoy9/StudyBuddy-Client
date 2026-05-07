import { useContext, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import axios from 'axios';
import toast from 'react-hot-toast';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { FaGoogle } from 'react-icons/fa';
import { Helmet } from 'react-helmet';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  //console.log(location);
  const { signIn, signInWithGoogle, user, loading } = useContext(AuthContext);
  const destination = location.state?.from || '/';


  const from = location.state || '/';

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithGoogle();

      navigate(destination);
    } catch (err) {
      toast.error(err?.message);
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    try {
      const result = await signIn(email, password);
      navigate(destination);
    } catch (err) {
      toast.error(err?.message);
    }
  };
  if (user || loading) return null;
  return (
    <div className='flex justify-center items-center min-h-[calc(100vh-306px)] my-12'>
      <Helmet>
        <title>StudyBuddy | Login</title>
      </Helmet>
      <div className='flex flex-col-reverse w-full max-w-3xl mx-auto overflow-hidden bg-white rounded-lg shadow-lg lg:flex-row lg:max-w-4xl'>
        <div className='w-full px-6 py-8 md:px-8 lg:w-1/2'>
          <h2 className='text-3xl font-bold text-center text-gray-800 mb-4'>Sign In</h2>
          <div className='mt-4'>
            <button
              onClick={handleGoogleSignIn}
              className='w-full flex justify-center py-3 px-6 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 mb-4'
            >
              <FaGoogle className='w-6 h-6 mr-2 text-white' />
              Sign In with Google
            </button>
          </div>
          <form onSubmit={handleSignIn} className='space-y-6'>
            <div>
              <label htmlFor='email' className='block text-lg font-medium text-gray-700'>
                Email Address
              </label>
              <input
                id='email'
                autoComplete='email'
                name='email'
                type='email'
                required
                className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-lg border-gray-300 rounded-md h-12 px-4'
              />
            </div>
            <div className='relative'>
              <label htmlFor='password' className='block text-lg font-medium text-gray-700'>
                Password
              </label>
              <div className='flex'>
                <input
                  id='password'
                  autoComplete='current-password'
                  name='password'
                  type={showPassword ? 'text' : 'password'}
                  required
                  className='mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-lg border-gray-300 rounded-md h-12 px-4'
                />
                <button
                  type='button'
                  className=' absolute inset-y-0 right-0 flex items-center justify-center p-2 mt-8 focus:outline-none'
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <FiEyeOff className='w-6 h-6 text-gray-500' />
                  ) : (
                    <FiEye className='w-6 h-6 text-gray-500' />
                  )}
                </button>
              </div>
            </div>
            <div>
              <button
                type='submit'
                className='w-full flex justify-center py-3 px-6 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
              >
                Sign In
              </button>
            </div>
          </form>
          <div className='text-center mt-4 text-lg text-gray-500'>
            Don't have an account?{' '}
            <Link to='/registration' className='text-indigo-600 hover:underline'>
              Sign Up
            </Link>
          </div>
        </div>

        <img className='object-cover w-full h-auto lg:w-1/2' src="https://img.freepik.com/premium-photo/concept-woman-with-tablet-photo-pretty-smiling-girl-gray_2221-6268.jpg" alt="" />
      </div>
    </div>
  )
}

export default Login