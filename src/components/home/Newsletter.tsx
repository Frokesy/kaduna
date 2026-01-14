import { useState } from 'react';
import { render } from '@react-email/render';
import Plunk from '@plunk/node';
import { Slide, toast, ToastContainer } from 'react-toastify';
import { NewsletterAdminTemplate } from '../email-templates/newsletter/ToAdmin';
import { NewsletterUserTemplate } from '../email-templates/newsletter/ToUser';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const plunkSecret = import.meta.env.VITE_PLUNK_SECRET;
  const plunkClient = new Plunk(plunkSecret);

  const handleSubmit = async () => {
    if (!email) {
      toast.error('Please enter your email.', {
        position: 'top-center',
        autoClose: 2000,
        transition: Slide,
        hideProgressBar: true,
      });
      return;
    }

    setLoading(true);

    try {
      const userEmailHtml = render(<NewsletterUserTemplate />);

      await plunkClient.emails.send({
        to: email,
        subject: "You're subscribed to Kaduna Newsletter 🎉",
        body: await userEmailHtml,
      });

      const adminEmailHtml = render(<NewsletterAdminTemplate email={email} />);

      await plunkClient.emails.send({
        to: 'akindeleayanfeoluwa@gmail.com',
        subject: 'New Newsletter Signup 📩',
        body: await adminEmailHtml,
      });

      toast.success('🎉 Subscription successful! Please check your inbox.', {
        position: 'top-center',
        autoClose: 2000,
        transition: Slide,
        hideProgressBar: true,
      });

      setEmail('');
    } catch (error) {
      console.error('Error sending newsletter emails:', error);
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
    <div className="py-[10vh] bg-[#F9FAFB]">
      <ToastContainer />
      <div className="w-[90vw] mx-auto bg-[#1A3827] rounded-2xl flex lg:flex-row flex-col justify-between items-center">
        <div className="lg:w-[45%] lg:px-10 px-4 pt-20 pb-6 lg:pt-0 lg:pb-0 text-[#ffffff]">
          <h2 className="lg:text-[36px] text-[30px] mb-6 font-semibold">
            Get regular updates from us.
          </h2>
          <p className="lg:text-[20px]">
            We&apos;re still building. Subscribe for updates and get mails on
            ongoing project progress and also on educational tips for
            Muslim-Christian relations.
          </p>
          <div className="mt-6 flex lg:flex-row flex-col justify-between lg:space-x-6">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-[#ffffff] placeholder:text-[#404040] text-[#404040] p-3 rounded-lg outline-none border-none lg:w-[70%]"
            />
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="bg-[#2B5D40] px-6 py-2 font-semibold lg:mt-0 mt-6 lg:w-[25%] rounded-lg"
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
                  <span> Subscribing...</span>
                </div>
              ) : (
                'Subscribe'
              )}
            </button>
          </div>
          <p className="pt-4">
            We care about your data in our{' '}
            <span className="underline">privacy policy</span>
          </p>
        </div>
        <div className="lg:w-[45%]">
          <img
            src="/assets/newsletter.png"
            alt="newsletter-img"
            className="w-full lg:rounded-r-2xl lg:rounded-b-none rounded-b-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
