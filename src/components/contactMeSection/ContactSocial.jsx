import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
    return (
      <div className="flex gap-4">
        <SingleContactSocial
          link="https://www.linkedin.com/in/faisal-mohamed-94120b25b/"
          Icon={FaLinkedinIn}
        />
        <SingleContactSocial
          link="https://github.com/fm-coding"
          Icon={FiGithub}
        />
        <SingleContactSocial
          link="https://www.instagram.com/__.feysal/?igsh=ODB3dm9yYnhzZG9n&utm_source=qr#"
          Icon={FaInstagram}
        />
      </div>
    );
  };
  
    

export default ContactSocial