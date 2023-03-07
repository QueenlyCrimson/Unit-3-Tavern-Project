function ForgotPassword () {
return (
  <div className="flex-row h-screen m-8 mt-24">
      <h1 className="text-white w-full text-center p-8 text-2xl font-bold">
        Forgot Password?
      </h1>
      <form className="space-y-6">
      <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <h2 className="text-white text-xl">Enter Email Address:</h2>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  // value={formValues.email}
                  // onChange={handleChange}
                  autoComplete="email"
                  required
                  className="relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-orange-400 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="Email address"
                />
              </div>
              </div>
              <button
                type="submit"
                // onClick={handleSubmit}
                className="group relative flex w-full justify-center rounded-md bg-orange-500 py-2 px-3 text-sm font-semibold text-white hover:bg-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  {/* <LockClosedIcon className="h-5 w-5 text-white group-hover:text-gray-700" aria-hidden="true" /> */}
                </span>
                Sign in
              </button>
      </form>
      </div>
)
}
export default ForgotPassword