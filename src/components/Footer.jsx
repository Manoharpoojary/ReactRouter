import React from 'react'

const Footer = () => {
  return (
    <div className='w-screen mt-10 p-3 h-[300px]  bg-gray-200 text-neutral-950  '><footer className="footer sm:footer-horizontal text-base-content  flex justify-center gap-[150px]">
  <nav className='flex justify-center flex-col'>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav className='flex justify-center flex-col'>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav className='flex justify-center flex-col'>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
  <form>
    <h6 className="footer-title">Newsletter</h6>
    <fieldset className="w-80">
      <label>Enter your email address</label>
      <div className="join">
        <input
          type="text"
          placeholder="username@site.com"
          className="input input-bordered join-item ring-1 ring-blue-400 rounded-[5px] mr-2 mt-2 " />
        <button className="btn btn-primary join-item bg-red-200 rounded-[5px] hover:bg-red-300 p-1 active:scale-110 transition duration-75 ease-in-out">Subscribe</button>
      </div>
    </fieldset>
  </form>
</footer></div>
  )
}

export default Footer