export default function Page() {
  return (
    <section className="gradient-form h-full bg-gray-200 md:h-screen">
      <div className="container h-full py-12 px-6">
        <div className=" g-6 flex h-full flex-wrap items-center justify-center text-gray-800">
          <div className="">
            <div className="block rounded-lg bg-white shadow-lg">
              <div className="g-0 lg:flex lg:flex-wrap">
                <div className="px-4 md:px-0">
                  <div className="md:mx-6 md:p-12">
                    <div className="text-center">
                      <h4 className="mt-1 mb-12 pb-1 text-xl font-semibold">
                        Face Authentication by FaceIO
                      </h4>
                    </div>
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
                        />
                      </div>
                      <div className="mb-4">
                        <input
                          type="password"
                          className="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
                          placeholder="Password"
                          name="pin"
                        />
                      </div>
                      <div className="mb-12 pt-1 pb-1 text-center">
                        <button
                          className="bg-green mb-3 inline-block w-full rounded px-6 py-2.5 text-xs font-medium uppercase leading-tight text-black shadow-md transition duration-150 ease-in-out focus:shadow-lg focus:outline-none focus:ring-0 hover:bg-blue-700 hover:shadow-lg active:shadow-lg"
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
                          className="inline-block rounded border-2 border-green-600 px-6 py-2 text-xs font-medium uppercase leading-tight text-green-600 transition duration-150 ease-in-out focus:outline-none focus:ring-0 hover:bg-black hover:bg-opacity-5"
                          onClick={handleLogIn}
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
