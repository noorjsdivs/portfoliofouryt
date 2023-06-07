import { FiArrowUpRight } from "react-icons/fi";
import SocialLink from "./SocialLink";
import { SocialLinkData } from "../data/data";
import Button from "./Button";

const Contact = () => {
  return (
    <div className="wrapper">
      <div className="max-w-5xl mx-auto flex flex-col gap-4 items-center justify-center">
        <h2 className="text-2xl font-bold">Let us create awesome products!</h2>
        <p className="text-lg tracking-wide font-medium text-center">
          I am always open to discussing your project, improving your online
          presence, or helping with Your website design and converting
          challenges.
        </p>
        <Button />
      </div>
      <div className="mt-8 flex items-center flex-wrap   gap-8 justify-center">
        {
          SocialLinkData.map((item)=>(
            <SocialLink key={item.id} item={item} />
          ))
        }
      </div>
    </div>
  );
};

export default Contact;
