import { useState } from "react";
import { HiClipboardCopy } from "react-icons/hi";
import { BsArrowDownRight } from "react-icons/bs";
import Title from "src/components/Title/Title";

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
    <div id="Contact" className="text-[#b1dddd] w-full h-full bg-gray-300/20 py-10 px-8 rounded-xl mx-auto flex flex-col justify-start items-center">
      <Title title="Contact" />
      {!toastShow && <div className="animate-pulse flex gap-2 justify-center items-end rotate-45 -translate-x-28 lg:-translate-x-40 translate-y-12 absolute">
        <span>Click on me!</span>
        <BsArrowDownRight />
      </div>}
      <div className="font-thin md:text-2xl relative">
        {!toastShow && <button type="button" className="h-10 flex gap-4 items-center hover:brightness-110" onClick={() => handleCopyMail()}>
          <span>oscarabad<strong>[</strong>at<strong>]</strong>pm<strong>[</strong>dot<strong>]</strong>me</span>
          <HiClipboardCopy />
        </button>}
        {toastShow && <div className="tooltip text-center flex items-center abolute top-0 left-0 rounded-lg py-4 px-8 h-6 font-bold text-neutral-900 bg-[#b1dddd]/60">Copied to clipboard!</div>}
      </div>
    </div >
  )
}
export default Contact