import { MdEmail } from "react-icons/md";
import { HiOutlineDeviceMobile } from "react-icons/hi";
import { FaMapMarkedAlt } from "react-icons/fa";
import { useRestCtx } from "../hooks";
import { useInView } from "react-intersection-observer";
import clsx from "clsx";
export const ContactInfo = () => {
  const {
    contact: { address, contactInfo },
  } = useRestCtx();
  const { ref, inView } = useInView({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={clsx(
        "text-lg rounded-sm gap-y-5 col-center text-slate-200 opacity-0",
        inView && "animate-fade-left animate-delay-200"
      )}
    >
      <span className="pb-1 text-2xl font-bold uppercase border-b">
        {contactInfo.title}
      </span>
      <div className="col-center">
        <FaMapMarkedAlt size="30" className="text-slate-300" />
        <span>{address.street}</span>
        <span>
          {address.city} {address.zipcode}
        </span>
      </div>
      <div className="col-center">
        <HiOutlineDeviceMobile size="30" className="text-slate-300" />
        <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
      </div>
      <div className="col-center">
        <MdEmail size="30" className="text-slate-300" />
        <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
      </div>
    </div>
  );
};
