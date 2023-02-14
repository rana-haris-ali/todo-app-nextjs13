'use client';

import axios from 'axios';
import { useState } from 'react';

export default function Page() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailValidationError, setEmailValidationError] = useState('');
  const [passwordValidationError, setPasswordValidationError] = useState('');

  const checkEmailValidity = () => {
    const isEmailValid = email
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      );
    isEmailValid
      ? setEmailValidationError('')
      : setEmailValidationError('Invalid Email');
  };
  const checkPasswordValidity = () => {
    const isPasswordValid = password.length >= 8;
    isPasswordValid
      ? setPasswordValidationError('')
      : setPasswordValidationError('Password must be 8 characters or more');
  };

  const handleSubmit = async () => {
    checkEmailValidity();
    checkPasswordValidity();

    // const {
    //   data: { data: createdTodo },
    // }: CreateTodoResponse = await axios.post('/api/users', {
    //   email,
    //   password,
    // });
  };
  return (
    <section className="gradient-form h-full">
      <div className="container h-full py-12 px-6">
        <div className=" g-6 flex h-full flex-wrap items-center justify-center font-bold text-gray-300">
          <div className="">
            <div className="block rounded-lg">
              <div className="g-0 lg:flex lg:flex-wrap">
                <div className="px-4 md:px-0">
                  <div className="md:mx-6 md:p-12">
                    <div className="text-center"></div>
                    <form>
                      <p className="mb-4">
                        Please Sign Up if you do not have an account
                      </p>
                      <div className="mb-4">
                        <input
                          type="email"
                          className="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                          placeholder="Your Email"
                          name="userEmail"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <h1 className="rounded bg-red-600 text-center text-sm text-white">
                          {emailValidationError}
                        </h1>
                      </div>
                      <div className="mb-4">
                        <input
                          type="password"
                          className="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <h1 className="rounded bg-red-600 text-center text-sm text-white">
                          {passwordValidationError}
                        </h1>
                      </div>
                      <div className="mb-12 pt-1 pb-1 text-center">
                        <button
                          className="bg-green mb-3 inline-block w-full rounded bg-[#24273D] px-6 py-2.5 text-sm font-bold uppercase leading-tight text-gray-300 shadow-md transition duration-150 ease-in-out focus:shadow-lg focus:outline-none focus:ring-0 hover:bg-black hover:shadow-lg active:shadow-lg"
                          type="button"
                          onClick={handleSubmit}
                        >
                          Sign Up
                        </button>
                      </div>
                      <div className="flex items-center justify-between pb-6">
                        <p className="mb-0 mr-2">Do you have an account?</p>
                        <button
                          type="button"
                          className="inline-block rounded bg-[#24273D] px-6 py-2 text-sm font-bold uppercase leading-tight text-gray-300 transition duration-150 ease-in-out focus:outline-none focus:ring-0 hover:bg-black"
                          // onClick={handleLogIn}
                        >
                          Log In
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
