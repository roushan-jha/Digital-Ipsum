import React, { useState } from "react";
import client_1 from "../assets/Logo Client 1.png";
import client_2 from "../assets/Logo Client 2.png";
import client_3 from "../assets/Logo Client 3.png";
import client_4 from "../assets/Logo Client 4.png";
import client_5 from "../assets/Logo Client 5.png";
import Phone from "../svg/Phone";
import Email from "../svg/Email";
import Home_24 from "../svg/Home_24";

const faqs = [
  { question: "What is a real estate agent?", answer: "Risus quam aliquam quis proin. Lectus a at vitae pulvinar ut amet. Magna fringilla nunc mattis consectetur ullamcorper sed at porttitor. Interdum mollis cursus in congue tempus. Vulputate quam nulla maecenas vel. Velit quis lorem neque a vel gravida." },
  { question: "What is a real estate broker?", answer: "answer" },
  { question: "How do I find a good real estate agent?", answer: "answer" },
  { question: "What is a home inspection?", answer: "answer" },
];

const ContactPage = () => {

    const [visibleIndex, setVisibleIndex] = useState(0);

    const toggleAnswer = (index) => {
        if (visibleIndex === index) {
            setVisibleIndex(null); 
        } else {
            setVisibleIndex(index); 
        }
    };

    const handleSubmit = (e) => {
      e.preventDefault();
    }

  return (
    <div className="font-primary">
      <div className="h-[50vh] bg-primary flex flex-col gap-3 items-center justify-center">
        <h1 className="font-bold text-5xl text-white">Contact Us</h1>
        <p className="font-medium text-white">Home / Contact Us</p>
      </div>
      <div className="p-32">
        <div className="flex flex-col gap-16">
          <div className="flex justify-between items-center gap-16 pb-12">
            <div className="w-2/5 flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <h2 className="font-semibold text-3xl">Get In Touch</h2>
                <p className="opacity-60 w-11/12">
                  In dignissim massa euismod massa. Odio vel in duis nisl massa
                  eget tempus. Non mattis.
                </p>
              </div>
              <div className="flex flex-col gap-6">
              <div className="flex gap-3 items-center">
                  <div className="p-4 rounded-full bg-slate-200">
                    <Email />
                  </div>
                  <div className="font-medium text-xl">info@bangoonan.com</div>
                </div>
                <div className="flex gap-3 items-center">
                  <div className="p-4 rounded-full bg-slate-200">
                    <Home_24 />
                  </div>
                  <div className="font-medium text-xl">123 Main St. Anytown, USA</div>
                </div>
                <div className="flex gap-3 items-center">
                  <div className="p-4 rounded-full bg-slate-200">
                    <Phone />
                  </div>
                  <div className="font-medium text-xl">+1 (555) 555-5555</div>
                </div>
              </div>
            </div>
            <div className="w-3/5 bg-slate-200 rounded-xl p-8">
              <form action="submit" className="flex flex-col gap-3">
                <div className="flex justify-between gap-6">
                  <div className="w-1/2 flex flex-col gap-2">
                    <label className="font-medium text-lg" htmlFor="Name">Your Name</label>
                    <input className="w-full focus:outline-none px-6 py-2 rounded-md h-12 placeholder:text-sm" type="text" placeholder="Ex: Jhon Dee" />
                  </div>
                  <div className="w-1/2 flex flex-col gap-2">
                    <label className="font-medium text-lg" htmlFor="Email">Your Email</label>
                    <input className="w-full focus:outline-none px-6 py-2 rounded-md h-12 placeholder:text-sm" type="text" placeholder="Ex: jhondee@gamil.com" />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-medium text-lg" htmlFor="message">Your Message</label>
                  <div><textarea className="w-full focus:outline-none resize-none rounded-xl h-40 p-6 placeholder:text-sm" name="message" id="msg" placeholder="Writing your message here..."></textarea></div>
                </div>
                <button onClick={handleSubmit} className="bg-primary text-white font-medium text-lg w-full py-4 px-6 rounded-xl">Send Message</button>
              </form>
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <img src={client_1} alt="Client Logo" />
            </div>
            <div>
              <img src={client_2} alt="Client Logo" />
            </div>
            <div>
              <img src={client_3} alt="Client Logo" />
            </div>
            <div>
              <img src={client_4} alt="Client Logo" />
            </div>
            <div>
              <img src={client_5} alt="Client Logo" />
            </div>
          </div>
          <div className="h-[1px] bg-primary opacity-10"></div>
        </div>
        <div className="flex justify-between items-center gap-16 pt-16">
          <div className="w-3/5 flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <h2 className="font-semibold text-3xl">FAQ</h2>
              <p className="opacity-60">Posuere id quam lorem dignissim.</p>
            </div>
            <div className='flex flex-col gap-3'>
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-slate-200 w-full px-4 py-3 rounded-md"
                >
                  <div className="flex justify-between">
                    <p className="text-lg font-medium">{faq.question}</p>
                    <button onClick={() => toggleAnswer(index)}>
                      {visibleIndex === index ? "▲" : "▼"}
                    </button>
                  </div>
                  {visibleIndex === index && (
                    <div className="text-left py-2 text-sm opacity-40 w-11/12">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="w-2/5 flex flex-col gap-3">
              <div className="bg-primary rounded-xl h-[50vh]"></div>
              <div className="flex flex-col gap-2">
                <h2 className="text-xl font-medium">Have Other Question?</h2>
                <p className="opacity-60 text-sm">Posuere id quam lorem dignissim.</p>
              </div>
              <div>
                <button className="bg-primary text-white px-6 py-3 rounded-xl w-1/2">Contact Us</button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
