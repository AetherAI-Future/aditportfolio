import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Get in Touch
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Let's discuss your next project
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
            <Mail className="h-8 w-8 text-indigo-600" />
            <h3 className="mt-4 text-lg font-medium text-gray-900">Email</h3>
            <p className="mt-2 text-gray-600">aadyadav2006@gmail.com</p>
          </div>

          <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
            <Phone className="h-8 w-8 text-indigo-600" />
            <h3 className="mt-4 text-lg font-medium text-gray-900">Phone</h3>
            <p className="mt-2 text-gray-600">+91 8905005626</p>
          </div>

          <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg">
            <MapPin className="h-8 w-8 text-indigo-600" />
            <h3 className="mt-4 text-lg font-medium text-gray-900">Location</h3>
            <p className="mt-2 text-gray-600">Jaipur, India</p>
          </div>
        </div>

        <form className="mt-12 max-w-xl mx-auto">
          <div className="grid grid-cols-1 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;