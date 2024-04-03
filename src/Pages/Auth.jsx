import React from 'react'
import { Link } from 'react-router-dom'
Link
function Auth({register}) {
  return (
    <div>
      <div className="row">
        <div className="col-lg-6">
              <img src="https://cdn.dribbble.com/users/2131993/screenshots/4948736/thoughtworks-gif_dribbble.gif" width={'100%'} className='p-4' alt="" />
        </div>
        <div className="col-lg-6">
              <form className='shadow bg-black'>
                <h2 className='text-center mt-5'>Project Fair</h2>
               <h4 className='text-center '>
               {
                    register? 'Register Here... ' : 'Login Here...'
                }
               </h4>

               <div className='mx-5 px-5 mt-3'>
                {
                  register && 
                  <input type="text" placeholder='Username' className='form-control mb-2' />

                }
                <input type="email" placeholder='email' className='form-control mb-2'/>
                <input type="password" placeholder='password' className='form-control mb-2'/>
               </div>

                <div>
                  {
                    register ?
                       <div className='text-center m-4'>
                        <button className='btn btn-dark m-4'>Register</button>
                        <p>Already registred? <Link to={'/login'}>Login here...</Link></p>
                       </div>
                       :
                       <div className='text-center m-4'>
                        <button className='btn btn-dark m-4'>Login</button>
                        <p>New to here? <Link to={'/register'}>Register here...</Link></p>
                       </div>
                  }
                </div>

              </form>
        </div>
      </div>
    </div>
  )
}

export default Auth