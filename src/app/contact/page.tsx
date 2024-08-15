import Button from "@/shareable-components/Button";
import Input from "@/shareable-components/Input";
import PageDescription from "@/shareable-components/PageDescription";
import { FaEnvelope, FaFacebook, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot, FaSquareXTwitter } from "react-icons/fa6";

const CONTACT_CONTENT = {
  TITLE: "Contact Us",
  DESCRIPTION:
    "Welcome to SkillBridge's Pricing Plan page, where we offer two comprehensive options to cater to your needs: Free and Pro. We believe in providing flexible and affordable pricing options for our services. Whether you're an individual looking to enhance your skills or a business seeking professional development solutions, we have a plan that suits you. Explore our pricing options below and choose the one that best fits your requirements.",
};

const ContactPage = () => {
  return (
    <>
      <PageDescription
        title={CONTACT_CONTENT.TITLE}
        description={CONTACT_CONTENT.DESCRIPTION}
      />

      <div className="wrapper my-8 md:my-20 2xl:my-24 flex flex-col gap-8">
        <div className="bg-white rounded-md grid sm:grid-cols-[1fr,auto] gap-8 lg:gap-14 p-8 lg:p-10">
          <form className="flex flex-col gap-5 md:gap-8">
            <div className="grid lg:grid-cols-2 gap-5 md:gap-8">
              <Input
                type="text"
                name="firstname"
                label="First Name"
                placeholder="Enter First Name"
              />
              <Input
                type="text"
                name="lastname"
                label="Last Name"
                placeholder="Enter Last Name"
              />
            </div>
            <div className="grid lg:grid-cols-2 gap-5 md:gap-8">
              <Input
                type="email"
                name="email"
                label="Email"
                placeholder="Enter your Email"
              />
              <Input
                type="text"
                name="phone"
                label="Phone"
                placeholder="Enter Phone"
              />
            </div>
            <Input
              type="text"
              name="subject"
              label="Subject"
              placeholder="Enter your Subject"
            />

            <Input
              type="text"
              name="message"
              label="Message"
              placeholder="Enter your Message here..."
            />

            <Button className="!w-fit !h-fit mx-auto">Send Your Message</Button>
          </form>

          <div className="max-sm:px-0 max-lg:px-5">
            <div className="bg-[#FCFCFD] border-2 border-[#F1F1F3] rounded-md px-6 md:px-12 py-4 mb-5 flex flex-col items-center">
              <div className="rounded-md bg-[#F7F7F8] border-2 border-[#F1F1F3] p-3 text-xl mb-3">
                <FaEnvelope />
              </div>
              <p className="text-sm md:text-lg text-center">support@skillbridge.com</p>
            </div>

            <div className="bg-[#FCFCFD] border-2 border-[#F1F1F3] rounded-md px-6 md:px-12 py-4 mb-5 flex flex-col items-center">
              <div className="rounded-md bg-[#F7F7F8] border-2 border-[#F1F1F3] p-3 text-xl mb-3">
                <FaPhoneAlt />
              </div>

              <p className="text-sm md:text-lg text-center">+91 00000 00000</p>
            </div>

            <div className="bg-[#FCFCFD] border-2 border-[#F1F1F3] rounded-md px-6 md:px-12 py-4 mb-5 flex flex-col items-center">
              <div className="rounded-md bg-[#F7F7F8] border-2 border-[#F1F1F3] p-3 text-xl mb-3">
                <FaLocationDot />
              </div>

              <p className="text-sm md:text-lg text-center">Some Where in the World</p>
            </div>

            <div className="bg-[#FCFCFD] border-2 border-[#F1F1F3] rounded-md px-6 md:px-12 py-4 mb-5 flex flex-col items-center">
              <div className="flex gap-5">
                <div className="rounded-md bg-[#F7F7F8] border-2 border-[#F1F1F3] p-3 text-xl mb-3 w-fit">
                  <FaFacebook />
                </div>
                <div className="rounded-md bg-[#F7F7F8] border-2 border-[#F1F1F3] p-3 text-xl mb-3 w-fit">
                  <FaSquareXTwitter />
                </div>
                <div className="rounded-md bg-[#F7F7F8] border-2 border-[#F1F1F3] p-3 text-xl mb-3 w-fit">
                  <FaLinkedin />
                </div>
              </div>
              <p className="text-sm md:text-lg text-center">Social Profiles</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
