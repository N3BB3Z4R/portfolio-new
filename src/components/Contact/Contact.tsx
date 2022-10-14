import { useState } from "react";
import { HiClipboardCopy } from "react-icons/hi";

const Contact = () => {
  const [toastShow, setToastShow] = useState(false);

  const handleCopyMail = () => {
    navigator.clipboard.writeText('oscar' + 'abad' + '@' + 'pm' + '.me')
    setTimeout(() => {
      setToastShow(false)
    }, 3000);
    setToastShow(true)
  }

  return (
    <div id="Contact" className="text-[#b1dddd] w-full h-[30vh] bg-gray-300/10 py-10 px-8 rounded-xl mx-auto flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold text-center">Contact</h1>
      <div className="font-thin md:text-2xl relative">
        {!toastShow && <button type="button" className="h-10 flex gap-4 items-center hover:brightness-110" onClick={() => handleCopyMail()}>
          <span>oscarabad<strong>[</strong>at<strong>]</strong>pm<strong>[</strong>dot<strong>]</strong>me</span>
          <HiClipboardCopy />
        </button>}
        {toastShow && <div className="tooltip text-center flex items-center abolute top-0 left-0 rounded-lg py-10 px-8 h-10 bg-[#b1dddd]/60">Copied to clipboard!</div>}
      </div>
      {/* <div id="ContactForm" className="mt-5 md:col-span-2 md:mt-0">
        <form action="#" method="POST">
          <div className="overflow-hidden shadow sm:rounded-md">
            <div className="bg-white px-4 py-5 sm:p-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">First name</label>
                  <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Last name</label>
                  <input type="text" name="last-name" id="last-name" autoComplete="family-name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                </div>

                <div className="col-span-6 sm:col-span-4">
                  <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">Email address</label>
                  <input type="text" name="email-address" id="email-address" autoComplete="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
                  <input type="textarea" name="country" id="country" autoComplete="country" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                </div>

              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
              <button type="submit" className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Save</button>
            </div>
          </div>
        </form>
      </div> */}
    </div >
  )
}
export default Contact