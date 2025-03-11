import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="fm3233000@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="+254 797 189 639" Image={FiPhone} />
      <SingleInfo text="Nairobi, Kenya" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;