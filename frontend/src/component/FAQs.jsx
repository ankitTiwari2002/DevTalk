import React from "react";

const FAQs = () => {
  const faqs = [
    {
      question: "What is DevTalk?",
      answer:
        "It is a platform designed to connect with multiple developer communities and provide a space for developers to share their knowledge and experiences.",
    },
    {
      question: "How do I reset my password?",
      answer:
        "Click on 'Forgot Password' on the login page and follow the instructions.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept credit/debit cards, UPI, and other payment methods supported by Razorpay.",
    },
    {
      question: "How can I contact support?",
      answer:
        "You can contact us via email at support@devtalk.com or call us at +123-456-7890.",
    },
  ];

  return (
    <div className="bg-slate-950 min-h-screen py-16 text-slate-100 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-96 bg-indigo-600/10 blur-3xl rounded-full"></div>
      
      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        <h1 className="text-5xl font-extrabold mb-4 text-center tracking-tight">
          Frequently Asked <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">Questions</span>
        </h1>
        <p className="text-slate-400 text-center mb-12 text-lg">
          Everything you need to know about the DevTalk ecosystem.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-6 rounded-2xl shadow-xl transition-all hover:bg-slate-900 hover:border-indigo-500/30">
              <h3 className="text-xl font-bold text-white mb-2">
                {faq.question}
              </h3>
              <p className="text-slate-400 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQs;
