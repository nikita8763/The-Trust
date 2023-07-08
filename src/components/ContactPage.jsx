import React from 'react';

const ContactPage = () => {
  return (
    <div className="bg-gray-100 py-12" id='contactus'>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className='font-inter mt-1 text-center text-6xl font-medium text-blue-600'>Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div>
            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email Address
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">
                  Subject
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                  id="subject"
                  type="text"
                  placeholder="Enter the subject"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="attachment">
                  Attachment
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                  id="attachment"
                  type="file"
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                  id="message"
                  rows="4"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className='ml-36 pt-4 mt-4 text-center border-t border-gray-300 sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l sm:border-t-0 sm:mt-0 sm:text-left'></div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Office Contact</h2>
            <p>
              <strong>Address:</strong> 1st Floor, Sant Nagar, # 75 Back Side, Land mark – next to MCD Primary School East Of Kailash, New Delhi - 110065
            </p>
            <p>
              <strong>Phone:</strong> +1 234 567890
            </p>
            <p>
              <strong>Email:</strong> info@humsafar.org
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
