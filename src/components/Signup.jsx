import { useState } from "react";

const Signup = ({closeSignUp}) => {

    const [fname , setFname] = useState('');
    const [lname , setLname] = useState('');
    const [dob , setDob] = useState('');
    const [ email , setEmail] = useState('');
    const [ password , setPassword ] = useState('');

    
    const handleSubmit = async(e) => {
        e.preventDefault();
    }

    return (

        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Create an Account
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">
                    First Name 
                    </label>
                    <div className="mt-1">
                        <input
                            id="firstName"
                            name="firstName"
                            type="firstName"
                            value={fname}
                            onChange={(e) => setFname(e.target.value)}
                            autoComplete="firstName"
                            required
                            className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div>
                    <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-gray-900">
                    Last Name 
                    </label>
                    <div className="mt-1">
                        <input
                            id="lastName"
                            name="lastName"
                            type="lastName"
                            value={lname}
                            onChange={(e) => setLname(e.target.value)}
                            autoComplete="lastName"
                            required
                            className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                
                <div>
                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Email address
                    </label>
                    <div className="mt-1">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            autoComplete="email"
                            required
                            className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                
                <div>
                    <label htmlFor="dob" className="block text-sm font-medium leading-6 text-gray-900">
                   Date of birth 
                    </label>
                    <div className="mt-1">
                        <input
                            id="dob"
                            name="dob"
                            type="dob"
                            value={dob}
                            onChange={(e) => setDob(e.target.value)}
                            autoComplete="dob"
                            required
                            className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>

                <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                  <div className="text-sm">
                    <button className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Forgot password?
                    </button>
                  </div>
                </div>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign Up
                </button>
              </div>

            </form>  
            
            <p className="mt-10 text-center text-sm text-gray-500">
                Already have an account?{' '}
                <button className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                    onClick={() => closeSignUp()} >
                    Login
                </button> 
            </p>
      

        </div>
     </div>

    )
}

export default Signup;