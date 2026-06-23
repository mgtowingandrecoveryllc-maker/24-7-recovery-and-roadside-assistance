"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import FindMeButton from "@/components/FindMeButton";

export default function ContactClient() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    location: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                For roadside emergencies, please call us directly — it&apos;s the fastest way to get
                help dispatched to your location.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="tel:+923269751717"
                className="flex items-start gap-4 p-4 bg-red-50 border border-red-100 rounded-xl hover:bg-red-100 transition-colors group"
              >
                <div className="bg-red-600 p-2 rounded-lg shrink-0">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="font-bold text-gray-900 group-hover:text-red-700">
                    0326 9751717
                  </div>
                  <div className="text-sm text-gray-600">24/7 Emergency Dispatch</div>
                </div>
              </a>

              <a
                href="mailto:recoveryandroadsideassistance@gmail.com"
                className="flex items-start gap-4 p-4 bg-gray-50 border border-gray-200 rounded-xl hover:bg-gray-100 transition-colors group"
              >
                <div className="bg-gray-700 p-2 rounded-lg shrink-0">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="font-bold text-gray-900 group-hover:text-gray-700 break-all text-sm">
                    recoveryandroadsideassistance@gmail.com
                  </div>
                  <div className="text-sm text-gray-600">General Inquiries</div>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 bg-gray-50 border border-gray-200 rounded-xl">
                <div className="bg-gray-700 p-2 rounded-lg shrink-0">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">Service Area</div>
                  <div className="text-sm text-gray-600">
                    Islamabad &amp; Rawalpindi, Pakistan
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gray-50 border border-gray-200 rounded-xl">
                <div className="bg-gray-700 p-2 rounded-lg shrink-0">
                  <Clock className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">Hours of Operation</div>
                  <div className="text-sm text-gray-600">Open 24 Hours, 7 Days a Week</div>
                  <div className="text-sm text-gray-600">365 Days a Year — Including Holidays</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 rounded-xl p-5 text-white">
              <div className="font-bold mb-1">Need help RIGHT NOW?</div>
              <p className="text-gray-400 text-sm mb-3">
                Skip the form — call us directly or share your GPS location and we&apos;ll
                dispatch immediately.
              </p>
              <div className="flex flex-col gap-2">
                <a
                  href="tel:+923269751717"
                  className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-5 py-2.5 rounded-lg transition-colors text-sm"
                >
                  <Phone className="h-4 w-4" /> Call Now — 0326 9751717
                </a>
                <FindMeButton variant="contact" />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Received!</h3>
                  <p className="text-gray-600">
                    Thank you for reaching out. We&apos;ll get back to you as quickly as possible.
                    For immediate assistance, please call{" "}
                    <a href="tel:+923269751717" className="text-red-600 font-semibold">
                      0326 9751717
                    </a>
                    .
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="text-xl font-extrabold text-gray-900 mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="John Smith"
                          className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="0326 9751717"
                          className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Service Needed
                      </label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white"
                      >
                        <option value="">Select a service...</option>
                        <option>Accident Towing</option>
                        <option>Flatbed Towing</option>
                        <option>Lockout Help</option>
                        <option>Jumpstart Service</option>
                        <option>Fuel Delivery</option>
                        <option>Tire Change</option>
                        <option>Winch Out Service</option>
                        <option>Other / Not Sure</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Your Location / Address
                      </label>
                      <input
                        type="text"
                        name="location"
                        value={form.location}
                        onChange={handleChange}
                        placeholder="Street address, intersection, or landmark"
                        className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Additional Details
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Describe your situation, vehicle type, or any other details..."
                        className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                      <Send className="h-4 w-4" />
                      Send Message
                    </button>

                    <p className="text-xs text-gray-500 text-center">
                      For immediate roadside emergencies, please call{" "}
                      <a href="tel:+923269751717" className="text-red-600 font-semibold">
                        0326 9751717
                      </a>{" "}
                      instead of using this form.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
