import { FiArrowUpRight } from "react-icons/fi";
import SocialLink from "./SocialLink";
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
        <SocialLink title="Github" link="https://github.com/noorjsdivs" />
        <SocialLink title="Youtube" link="https://www.youtube.com/@reactjsBD" />
        <SocialLink
          title="Linkedin"
          link="https://www.linkedin.com/in/noor-mohammad-ab2245193/"
        />
        <SocialLink
          title="Facebook"
          link="https://www.facebook.com/Noorlalu143/"
        />
        <SocialLink title="Nextjs" link="https://vercel.com/noorjsdivs" />
      </div>
    </div>
  );
};

export default Contact;
