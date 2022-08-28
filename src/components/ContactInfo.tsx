import { MdEmail } from "react-icons/md";
import { HiOutlineDeviceMobile } from "react-icons/hi";
import { FaMapMarkedAlt } from "react-icons/fa";

export const ContactInfo = () => {
  return (
    <div className="text-lg rounded-sm gap-y-5 col-center text-slate-200 ">
      <span className="text-2xl font-bold uppercase">Contact Info</span>
      <div className="col-center">
        <FaMapMarkedAlt size="30" className="text-slate-300" />
        <span>SeelaStaße 20a </span>
        <span>Hamburg, 20202</span>
      </div>
      <div className="col-center">
        <HiOutlineDeviceMobile size="30" className="text-slate-300" />
        <a href={`tel:+98234798237489234`}>+49 40 5000 45 32</a>
      </div>
      <div className="col-center">
        <MdEmail size="30" className="text-slate-300" />
        <a href={`mailto:info@test.com`}>info@restaurant.com</a>
      </div>
    </div>
  );
};
