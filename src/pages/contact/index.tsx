import { useState } from 'react';
import Container from '../../components/defaults/Container';
import Footer from '../../components/defaults/Footer';
import Header from '../../components/defaults/Header';
import Newsletter from '../../components/home/Newsletter';
import {
  ContactEmailTag,
  ContactLocationTag,
  ContactPhoneTag,
} from '../../components/Icons';
import { render } from '@react-email/render';
import Plunk from '@plunk/node';
import { Slide, toast, ToastContainer } from 'react-toastify';
import { ContactUserTemplate } from '../../components/email-templates/contact/ToUser';
import { ContactAdminTemplate } from '../../components/email-templates/contact/ToAdmin';

const Contact = () => {
  const [data, setData] = useState({
    fname: '',
    lname: '',
    email: '',
    phone: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const plunkSecret = import.meta.env.VITE_PLUNK_SECRET;
  const plunkClient = new Plunk(plunkSecret);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    if (!data.fname || !data.email || !data.message) {
      toast.error('Please fill in required fields.', {
        position: 'top-center',
        autoClose: 2000,
        transition: Slide,
        hideProgressBar: true,
      });
      return;
    }

    setLoading(true);

    try {
      const adminEmailHtml = await render(<ContactAdminTemplate {...data} />);
      await plunkClient.emails.send({
        to: 'ayanfeoluwaakindele24@gmail.com',
        subject: '📩 New Contact Form Submission',
        body: adminEmailHtml,
      });

      const userEmailHtml = await render(
        <ContactUserTemplate firstname={data.fname} />
      );
      await plunkClient.emails.send({
        to: data.email,
        subject: '✅ We received your message',
        body: userEmailHtml,
      });

      toast.success('🎉 Message sent successfully!', {
        position: 'top-center',
        autoClose: 2000,
        transition: Slide,
        hideProgressBar: true,
      });

      setData({
        fname: '',
        lname: '',
        email: '',
        phone: '',
        message: '',
      });
    } catch (error) {
      console.error('Error sending contact form:', error);
      toast.error('Something went wrong. Please try again.', {
        position: 'top-center',
        autoClose: 2000,
        transition: Slide,
        hideProgressBar: true,
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <Container>
      <ToastContainer />
      <Header color="black" />

      <div className="flex lg:flex-row flex-col justify-between items-center my-10">
        <div className="lg:w-[55%] lg:px-20 w-[90%]">
          <h2 className="text-[48px] font-semibold mb-6">Contact Us</h2>
          <p className="text-[18px] mb-6">
            Our friendly team would love to hear from you.
          </p>
          <div className="mt-10 space-y-6">
            <div className="flex lg:flex-row flex-col justify-between lg:space-x-6">
              <div className="flex flex-col space-y-3 lg:w-[50%]">
                <label className="text-[14px] text-[#344054]">First name</label>
                <input
                  type="text"
                  placeholder="First name"
                  value={data.fname}
                  onChange={handleChange}
                  name="fname"
                  className="border border-[#cccccc] outline-none rounded-md p-3"
                />
              </div>
              <div className="flex flex-col lg:mt-0 mt-6 space-y-3 lg:w-[50%]">
                <label className="text-[14px] text-[#344054]">Last name</label>
                <input
                  type="text"
                  placeholder="Last name"
                  value={data.lname}
                  onChange={handleChange}
                  name="lname"
                  className="border border-[#cccccc] outline-none rounded-md p-3"
                />
              </div>
            </div>
            <div className="flex flex-col space-y-3">
              <label className="text-[14px] text-[#344054]">Email</label>
              <input
                type="email"
                placeholder="johndoe@gmail.com"
                value={data.email}
                onChange={handleChange}
                name="email"
                className="border border-[#cccccc] outline-none rounded-md p-3"
              />
            </div>
            <div className="flex flex-col space-y-3">
              <label className="text-[14px] text-[#344054]">Phone number</label>
              <input
                type="number"
                placeholder="+234 801 234 5678"
                value={data.phone}
                onChange={handleChange}
                name="phone"
                className="border border-[#cccccc] outline-none rounded-md p-3"
              />
            </div>
            <div className="flex flex-col space-y-3">
              <label className="text-[14px] text-[#344054]">Message</label>
              <textarea
                rows={5}
                placeholder="Type your message here"
                value={data.message}
                onChange={handleChange}
                name="message"
                className="border border-[#cccccc] outline-none rounded-md p-3 resize-none"
              />
            </div>
            <div className="flex items-center pt-6 space-x-3">
              <input type="checkbox" className="w-4 h-4" />
              <span className="text-[14px] text-[#344054]">
                You agree to our friendly{' '}
                <span className="underline">privacy policy</span>
              </span>
            </div>
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="bg-[#2F6646] w-full text-white px-6 py-3 rounded-md mt-4"
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <svg
                    className="animate-spin h-5 w-5 text-white mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    ></path>
                  </svg>
                  <span> Sending...</span>
                </div>
              ) : (
                'Send Message'
              )}
            </button>
          </div>
        </div>
        <div className="lg:w-[40%] lg:mt-0 mt-10">
          <img src="/assets/map.png" alt="map" className="w-full" />
        </div>
      </div>

      <div className="mt-20 w-[90vw] mx-auto flex flex-col items-center">
        <div className="flex flex-col items-center justify-center space-y-3">
          <button className="bg-[#EAF0ED] p-2 rounded-full text-[#214832] text-[14px]">
            Contact us
          </button>
          <h2 className="text-[36px] font-semibold">
            We&apos;d love to hear from you
          </h2>
          <p className="text-[20px] text-[#667085]">
            Chat to our friendly team.
          </p>
        </div>
        <div className="my-20 w-full">
          <img
            src="/assets/contact-img.png"
            alt="contact-img"
            className="w-full"
          />
        </div>
        <div className="grid lg:grid-cols-3 lg:gap-10 gap-6 w-[90vw] mx-auto">
          <div className="bg-[#EAF0ED] p-6 rounded-md flex flex-col">
            <ContactEmailTag />
            <h3 className="text-[20px] font-semibold mt-20">
              Send us an email
            </h3>
            <p className="text-[16px] text-[#344054] my-2">
              Speak to our friendly team.
            </p>
            <span className="text-[#2F6646] font-semibold mt-6">
              kadunacenter2003@gmail.com
            </span>
            <span className="text-[#2F6646] font-semibold mt-2">
              mails@kadacmr.org
            </span>
          </div>

          <div className="bg-[#EAF0ED] p-6 rounded-md flex flex-col">
            <ContactLocationTag />
            <h3 className="text-[20px] font-semibold mt-20">Visit us</h3>
            <p className="text-[16px] text-[#344054] my-2">
              Visit our office HQ
            </p>
            <span className="text-[#2F6646] font-semibold mt-6">
              No. 8, Ukissa Crescent, Off Bida Road,
            </span>
            <span className="text-[#2F6646] font-semibold mt-2">
              Kaduna - Nigeria
            </span>
          </div>

          <div className="bg-[#EAF0ED] p-6 rounded-md flex flex-col">
            <ContactPhoneTag />
            <h3 className="text-[20px] font-semibold mt-20">Call us</h3>
            <p className="text-[16px] text-[#344054] my-2">
              Mon-Fri from 8am to 5pm
            </p>
            <span className="text-[#2F6646] font-semibold mt-6">
              +234 (0)803 9501 998
            </span>
          </div>
        </div>
      </div>

      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Contact;
