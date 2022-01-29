import React from 'react';
import { Link } from "react-router-dom";
import Button from "@material-tailwind/react/Button";
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
function Footer() {
    return (
      

<footer className="flex flex-col h-50 w-full static bottom-0 bg-gray-100 pt-20 pb-2">
  <div className="container mx-auto px-4">
    <div className="flex flex-wrap text-left lg:text-left">
      <div className="w-full lg:w-6/12 px-4">
        <h4 className="text-3xl fonat-semibold text-blueGray-700">Let's keep in touch!</h4>
        <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
          Find us on any of these platforms, we respond 1-2 business days.
        </h5>
        <div className=" flex flex-row mt-6 mr-2 py -4 lg:mb-0 mb-6">
          
       
            <Button
            color="gray"
            buttonType="outline"
            iconOnly={true}
            rounded={true}
            ripple="dark"
            className="border-0"
            >
                <FacebookIcon size="3xl" />
            </Button>
            <Button
            color="blue"
            buttonType="outline"
            iconOnly={true}
            rounded={true}
            ripple="dark"
            className="border-0 ml-4"
            >
                <TwitterIcon size="3xl" className="bg-gray"/>
            </Button>
            <Button
            color="gray"
            buttonType="outline"
            iconOnly={true}
            rounded={true}
            ripple="dark"
            className="border-0 ml-4"
            >
                <InstagramIcon size="3xl" className="bg-gray"/>
            </Button>
        </div>
      </div>
      <div className="w-full lg:w-6/12 px-4">
        <div className="flex flex-wrap items-top mb-6">
          <div className="w-full lg:w-4/12 px-4 ml-auto">
            <span className="block uppercase text-pink-500 text-sm font-bold mb-2">Useful Links</span>
            <ul className="list-unstyled">
              <li>
                <Link className="text-gray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" to="/about">About Us</Link>
              </li>
              <li>
                <Link className="text-gray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" to="/mentor">Mentor</Link>
              </li>
              <li>
                <Link className="text-gray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" to="/mentee">Mentee</Link>
              </li>
              <li>
                <Link className="text-gray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" to="/profam">Our Community</Link>
              </li>
              <li>
                <Link className="text-gray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" to="/blog">Blogs</Link>
              </li>
              
            </ul>
          </div>
          <div className="w-full lg:w-4/12 px-4">
            <span className="block uppercase text-pink-500 text-sm font-bold mb-2">Other Resources</span>
            <ul className="list-unstyled">
              <li>
                <a className="text-gray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile">MIT License</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://creative-tim.com/terms?ref=njs-profile">Terms &amp; Conditions</a>
              </li>
              <li>
                <a className="text-gray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="https://creative-tim.com/privacy?ref=njs-profile">Privacy Policy</a>
              </li>
              <li>
                <Link className="text-gray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" to="/contact">Contact Us</Link>
              </li>
              
              
            </ul>
          </div>
        </div>
      </div>
    </div>
    <hr className="my-6 border-gray-700 w-full"/>
    <div className="flex flex-wrap items-center md:justify-between justify-center">
      <div className="w-full md:w-4/12 px-4 mx-auto text-center">
        <div className="text-sm text-gray-500 font-semibold py-1">
          Copyright © <span id="get-current-year">2021 </span>
          <Link href="https://www.creative-tim.com?ref=njs-profile" className="text-gray-500 hover:text-gray-800">professionaled</Link>.
        </div>
      </div>
    </div>
  </div>
</footer>
    )
}

export default Footer
