import { FaEnvelopeOpen, FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaPinterest, FaTwitter } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Title from "../ui/Title";
const Footer = () => {
    return (
        <div className="bg-secondary text-white">
      <div className="container mx-auto pt-16 pb-6">
        <div className="flex md:justify-between justify-center text-center flex-wrap md:gap-y-0 gap-y-6 ">
          <div className="md:flex-1">
            <Title addClass="text-[30px]">Contact Us</Title>
            <div className="flex flex-col gap-y-2 mt-3">
              <div>
                <FaLocationDot className="mx-20"/>
                <span className="inline-block ml-2">Location</span>
              </div>
              <div>
                <FaPhone className="mx-20"/>
                <span className="inline-block ml-2">Call +01 1234567890</span>
              </div>
              <div>
                <FaEnvelopeOpen className="mx-20"/>
                <span className="inline-block ml-2">demo@gmail.com</span>
              </div>
            </div>
          </div>
          <div className="md:flex-1">
            <Title addClass="text-[38px] font-bold italic"><span className="text-primary">Well</span>Done</Title>
            <p className="mt-3">
              Necessary, making this the first true generator on the Internet.
              It uses a dictionary of over 200 Latin words, combined with
            </p>
            <div className="flex items-center justify-center mt-5 gap-x-2">
              <a
                href=""
                className="w-8 h-8 grid place-content-center bg-white text-secondary rounded-full "
              >
                <FaFacebook/>
              </a>
              <a
                href=""
                className="w-8 h-8 grid place-content-center bg-white text-secondary rounded-full"
              >
                <FaTwitter/>
              </a>
              <a
                href=""
                className="w-8 h-8 grid place-content-center bg-white text-secondary rounded-full"
              >
                <FaLinkedin/>
              </a>
              <a
                href=""
                className="w-8 h-8 grid place-content-center bg-white text-secondary rounded-full"
              >
                <FaInstagram/>
              </a>
              <a
                href=""
                className="w-8 h-8 grid place-content-center bg-white text-secondary rounded-full"
              >
                <FaPinterest/>
              </a>
            </div>
          </div>
          <div className="md:flex-1">
            <Title addClass="text-[30px]">Opening Hours</Title>
            <div className="flex flex-col gap-y-2 mt-3">
              <div>
                <span className="inline-block ml-2">Everyday</span>
              </div>
              <div>
                <span className="inline-block ml-2">10.00 Am -10.00 Pm</span>
              </div>
            </div>
          </div>
        </div>
        <p className="text-center mt-10">
          © 2025 All Rights Reserved By Free Html Templates
        </p>
      </div>
    </div>
    )
}

  


export default Footer;