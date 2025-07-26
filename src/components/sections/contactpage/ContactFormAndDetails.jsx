import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const ContactFormAndDetails = ({ title, bodyText, contactInfo }) => {
  const serviceOptions = [
    "General Inquiry",
    "Crossing Services",
    "Pushing & Jacking",
    "Boring Services",
    "Consulting",
    "Other",
  ];

  const iconMap = {
    Address: (
      <MapPin
        className="h-6 w-6 text-amber-500 flex-shrink-0 mt-1"
        aria-hidden="true"
      />
    ),
    Phone: (
      <Phone
        className="h-6 w-6 text-amber-500 flex-shrink-0 mt-1"
        aria-hidden="true"
      />
    ),
    Email: (
      <Mail
        className="h-6 w-6 text-amber-500 flex-shrink-0 mt-1"
        aria-hidden="true"
      />
    ),
  };

  return (
    <section id="contact" className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-12">
          {/* Info Column: Appears first on mobile, second (right) on desktop */}
          <div className="order-1 lg:order-2">
            <h3 className="text-3xl font-bold tracking-tight text-gray-900">
              {title}
            </h3>
            <p className="mt-6 text-lg leading-7 text-gray-600">{bodyText}</p>
            <dl className="mt-10 space-y-6 text-base leading-7 text-gray-600">
              {contactInfo.map((item) => (
                <div key={item.type} className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">{item.type}</span>
                    {iconMap[item.type]}
                  </dt>
                  <dd className="text-gray-800">
                    <a
                      className={
                        item.type === "Email" || item.type === "Phone"
                          ? "hover:text-amber-600"
                          : ""
                      }
                      href={
                        item.type === "Email"
                          ? `mailto:${item.value}`
                          : item.type === "Phone"
                          ? `tel:${item.value}`
                          : "#"
                      }
                    >
                      {item.value}
                    </a>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Form Column: Appears second on mobile, first (left) on desktop */}
          <div className="order-2 lg:order-1">
            <form action="#" method="POST" className="space-y-6">
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-bold leading-6 text-gray-900"
                  >
                    Name
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="name"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-500 sm:text-sm sm:leading-6 bg-white"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-bold leading-6 text-gray-900"
                  >
                    Company
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name="company"
                      id="company"
                      autoComplete="organization"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-500 sm:text-sm sm:leading-6 bg-white"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-bold leading-6 text-gray-900"
                  >
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-500 sm:text-sm sm:leading-6 bg-white"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-bold leading-6 text-gray-900"
                  >
                    Phone
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="tel"
                      name="phone"
                      id="phone"
                      autoComplete="tel"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-500 sm:text-sm sm:leading-6 bg-white"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="service-of-interest"
                    className="block text-sm font-bold leading-6 text-gray-900"
                  >
                    Service of Interest
                  </label>
                  <div className="mt-2.5">
                    <select
                      id="service-of-interest"
                      name="service-of-interest"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-amber-500 sm:text-sm sm:leading-6 bg-white"
                    >
                      {serviceOptions.map((option) => (
                        <option key={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-bold leading-6 text-gray-900"
                  >
                    Message
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      name="message"
                      id="message"
                      rows="4"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-slate-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-amber-500 sm:text-sm sm:leading-6 bg-white"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full rounded-md bg-amber-500 px-3.5 py-3 text-center text-base font-bold text-blue-900 shadow-sm hover:bg-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600 transition-colors duration-200"
                >
                  Send Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormAndDetails;
