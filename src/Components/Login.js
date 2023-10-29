import { React, useState } from "react";


function Login(){

    const [showEmailForm, setShowEmailForm] = useState(true);

    const toggleForm = () => {
      setShowEmailForm(!showEmailForm);
    };

    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(false);

    const handleEmailChange = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);

        // You can use a regular expression to validate the email
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
        const isValid = emailRegex.test(newEmail);

        if (isValid) {
            setIsEmailValid(true);
            setError('');
        } else {
            setIsEmailValid(false);
            setError('Invalid email address');
        }
    };

     


    return(
        <div>
            <div className="">
            <p class="text-4xl font-bold text-center radiant-text">Acchoos.com</p>
            </div>
            <div className="flex items-center justify-center bg-gray-100    ">
                <div className="mt-4 bg-white w-[400px] h-[580px] p-10 rounded-lg shadow-lg border-2 border-gray-300 ">
                    
                    <h2 className="text-2xl font-semibold mb-4">Sign In</h2>
                    {showEmailForm ? (
                    <form>
                    <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
            </label>
            {error && <div className="text-red-500 text-sm mt-1">{error}</div>}
            <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleEmailChange}
                className={`w-full p-2 border rounded-md ${error ? 'border-red-500' : 'border-gray-300'}`}
            />
            <button
                className={`mt-4 w-full bg-pink-600 text-white font-medium py-1 rounded-lg hover:bg-pink-700 ${
                    isEmailValid ? '' : 'cursor-not-allowed'
                }`}
                type="button"
                onClick={toggleForm}
                disabled={!isEmailValid}
            >
                Continue
            </button>
        </div>
                       
                        <div>
                        <div>
                            <p className="text-sm mt-4">
                                By continuing, you agree to Acchoos's{' '}
                                <a href="/conditions" className="text-blue-500 underline">
                                Conditions of Use
                                </a>{' '}
                                and{' '}
                                <a href="/privacy" className="text-blue-500 underline">
                                Privacy Notice
                                </a>
                                .
                            </p>

                        </div>

                </div>
                        <div>
                        <hr className="border-1  mt-32 border-black"/>
                                <p className="mt-2 text-sm text-gray-400 text-center">New to Acchoos?</p>
                                <button className=" mt-2 w-full bg-pink-600 text-white font-medium py-1 rounded-lg hover:bg-pink-700" type="button" >
                                Create your Account
                                </button>
                                <p className="text-xs text-center mt-20">Terms and Conditions Applied</p>
                                <p className="text-xs mt- 10 text-center">©  2023, Acchoos.com </p>

                        </div>
                
                        
                    </form>
                    
                    ) : (
                    <form>
                        <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 " htmlFor="password">
                            Password <a href="/conditions" className="float-right text-blue-500 underline  ">Forget Password?</a>
                        </label>
                        <input
                            className="w-full px-4 py-2 border rounded-lg border-gray-300  focus:outline-none mt-2"
                            type="password"
                            id="password"
                            placeholder=" "
                        />
                        </div>
                        <button
                        className="w-full bg-pink-600 text-white font-medium py-1 rounded-lg hover:bg-pink-700"
                        type="button"
                        onClick={toggleForm}
                        >
                        Sign In
                        </button>
                        <div>
                        <div>
                <p className="text-sm mt-4">
                    By continuing, you agree to Acchoos's{' '}
                    <a href="/conditions" className="text-blue-500 underline">
                    Conditions of Use
                    </a>{' '}
                    and{' '}
                    <a href="/privacy" className="text-blue-500 underline">
                    Privacy Notice
                    </a>
                    .
                </p>

                        </div>

                </div>

                <div>
                        <hr className="border-1  mt-32 border-black"/>
                                <p className="mt-2 text-sm text-gray-400 text-center">New to Acchoos?</p>
                                <button className=" mt-2 w-full bg-pink-600 text-white font-medium py-1 rounded-lg hover:bg-pink-700" type="button" >
                                Create your Account
                                </button>
                                <p className="text-xs text-center mt-20">Terms and Conditions Applied</p>
                                <p className="text-xs mt- 10 text-center">©  2023, Acchoos.com </p>

                        </div>
                        
                    </form>
                    
                    )}
                </div>
            </div>

   
        </div>
    )
}

export default Login