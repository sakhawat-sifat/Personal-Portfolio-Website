import { useState } from 'react';import { useState } from 'react';import { useState } from 'react';import { useState, useEffect, useCallback } from 'react';

import emailjs from 'emailjs-com';

import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';import emailjs from 'emailjs-com';

import { Mail, MapPin, Linkedin, Send, CheckCircle } from 'lucide-react';

import ScrollAnimateSection from './ScrollAnimateSection';import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';import emailjs from 'emailjs-com';import emailjs from 'emailjs-com';



const Contact = () => {import { Mail, MapPin, Linkedin, Send, CheckCircle } from 'lucide-react';

  const [formData, setFormData] = useState({

    name: '',import ScrollAnimateSection from './ScrollAnimateSection';import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

    email: '',

    message: ''

  });

  const [isSubmitted, setIsSubmitted] = useState(false);const Contact = () => {import { Mail, MapPin, Linkedin, Send, CheckCircle } from 'lucide-react';import { Mail, MapPin, Linkedin, Send, CheckCircle, AlertCircle } from 'lucide-react';

  const [sending, setSending] = useState(false);

  const [sendError, setSendError] = useState('');  const [formData, setFormData] = useState({

  

  const { executeRecaptcha } = useGoogleReCaptcha();    name: '',import ScrollAnimateSection from './ScrollAnimateSection';import ScrollAnimateSection from './ScrollAnimateSection';



  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {    email: '',

    setFormData({

      ...formData,    message: ''

      [e.target.name]: e.target.value

    });  });

  };

  const [isSubmitted, setIsSubmitted] = useState(false);const Contact = () => {const Contact = () => {

  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault();  const [sending, setSending] = useState(false);

    

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {  const [sendError, setSendError] = useState('');  const [formData, setFormData] = useState({  const [formData, setFormData] = useState({

      setSendError('Please fill in all required fields.');

      return;  

    }

  const { executeRecaptcha } = useGoogleReCaptcha();    name: '',    name: '',

    setSending(true);

    setSendError('');



    try {  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {    email: '',    email: '',

      // Try to get reCAPTCHA token (fallback for development)

      let recaptchaToken = 'dev-mode';    setFormData({

      

      if (executeRecaptcha) {      ...formData,    message: ''    message: ''

        try {

          recaptchaToken = await executeRecaptcha('contact_form');      [e.target.name]: e.target.value

        } catch (error) {

          console.warn('reCAPTCHA not available, continuing without verification');    });  });  });

        }

      }  };



      // Send email with EmailJS  const [isSubmitted, setIsSubmitted] = useState(false);  const [isSubmitted, setIsSubmitted] = useState(false);

      await emailjs.send(

        'service_zn8g4tp',  const handleSubmit = async (e: React.FormEvent) => {

        'template_uk1va6i',

        {    e.preventDefault();  const [sending, setSending] = useState(false);  const [sending, setSending] = useState(false);

          from_name: formData.name,

          from_email: formData.email,    

          message: formData.message,

          'g-recaptcha-response': recaptchaToken,    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {  const [sendError, setSendError] = useState('');  const [sendError, setSendError] = useState('');

        },

        '-sasBOCdMpP7gnvr6'      setSendError('Please fill in all required fields.');

      );

            return;    

      setIsSubmitted(true);

      setTimeout(() => setIsSubmitted(false), 3000);    }

      setFormData({ name: '', email: '', message: '' });

    } catch (error) {  const { executeRecaptcha } = useGoogleReCaptcha();  const { executeRecaptcha } = useGoogleReCaptcha();

      console.error('Error sending email:', error);

      setSendError('Failed to send message. Please try again later.');    setSending(true);

    } finally {

      setSending(false);    setSendError('');

    }

  };



  return (    try {  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {  // Initialize EmailJS

    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gray-50">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">      // Try to get reCAPTCHA token, but don't fail if it doesn't work

        <ScrollAnimateSection className="text-center mb-12 sm:mb-16">

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">      let recaptchaToken = 'localhost-dev';    setFormData({  useEffect(() => {

            Get In Touch

          </h2>      

          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">

            Ready to discuss your next project? I'd love to hear from you and explore how we can work together.      if (executeRecaptcha) {      ...formData,    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '-sasBOCdMpP7gnvr6';

          </p>

        </ScrollAnimateSection>        try {



        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">          recaptchaToken = await executeRecaptcha('contact_form');      [e.target.name]: e.target.value    emailjs.init(publicKey);

          {/* Contact Information */}

          <ScrollAnimateSection animation="fade-left" delay={200}>        } catch (error) {

            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Let's Connect</h3>

            <p className="text-gray-700 mb-8 text-sm sm:text-base">          console.warn('reCAPTCHA warning (continuing):', error);    });  }, []);

              Whether you have a project in mind, need consultation on business analysis, 

              or want to discuss project management opportunities, I'm here to help.        }

            </p>

      }  };

            <div className="space-y-6">

              <div className="flex items-start">

                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">

                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600" />      // Send email with EmailJS  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

                </div>

                <div>      await emailjs.send(

                  <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Email</h4>

                  <a         'service_zn8g4tp',  const handleSubmit = async (e: React.FormEvent) => {    setFormData({

                    href="mailto:contact@sakhawatsifat.me"

                    className="text-teal-600 hover:text-teal-700 transition-colors duration-200 text-sm sm:text-base break-all"        'template_uk1va6i',

                  >

                    contact@sakhawatsifat.me        {    e.preventDefault();      ...formData,

                  </a>

                </div>          from_name: formData.name,

              </div>

          from_email: formData.email,          [e.target.name]: e.target.value

              <div className="flex items-start">

                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">          message: formData.message,

                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />

                </div>        },    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {    });

                <div>

                  <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Location</h4>        '-sasBOCdMpP7gnvr6'

                  <p className="text-gray-600 text-sm sm:text-base">Mirpur, Dhaka, Bangladesh</p>

                </div>      );      setSendError('Please fill in all required fields.');  };

              </div>

      

              <div className="flex items-start">

                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">      setIsSubmitted(true);      return;

                  <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />

                </div>      setTimeout(() => setIsSubmitted(false), 3000);

                <div>

                  <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">LinkedIn</h4>      setFormData({ name: '', email: '', message: '' });    }  const handleSubmit = useCallback(async (e: React.FormEvent) => {

                  <a 

                    href="https://www.linkedin.com/in/hossain-sakhawat/"    } catch (error) {

                    target="_blank"

                    rel="noopener noreferrer"      console.error('Error sending email:', error);    e.preventDefault();

                    className="text-purple-600 hover:text-purple-700 transition-colors duration-200 text-sm sm:text-base"

                  >      setSendError('Failed to send message. Please try again later.');

                    Connect with me

                  </a>    } finally {    setSending(true);    

                </div>

              </div>      setSending(false);

            </div>

          </ScrollAnimateSection>    }    setSendError('');    // Validate form data



          {/* Contact Form */}  };

          <ScrollAnimateSection animation="fade-right" delay={400}>

            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover-lift">    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {

              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>

                return (

              {isSubmitted ? (

                <div className="text-center py-8">    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gray-50">    try {      setSendError('Please fill in all required fields.');

                  <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 text-green-500 mx-auto mb-4 animate-scale-in" />

                  <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Message Sent!</h4>      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                  <p className="text-gray-600 text-sm sm:text-base">Thank you for reaching out. I'll get back to you soon.</p>

                </div>        <ScrollAnimateSection className="text-center mb-12 sm:mb-16">      // Try to get reCAPTCHA token (fallback for localhost development)      return;

              ) : (

                <form onSubmit={handleSubmit} className="space-y-6">          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">

                  <div>

                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">            Get In Touch      let recaptchaToken = 'dev-mode';    }

                      Name

                    </label>          </h2>

                    <input

                      type="text"          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">      

                      id="name"

                      name="name"            Ready to discuss your next project? I'd love to hear from you and explore how we can work together.

                      value={formData.name}

                      onChange={handleChange}          </p>      if (executeRecaptcha) {    if (!executeRecaptcha) {

                      required

                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"        </ScrollAnimateSection>

                      placeholder="Your full name"

                    />        try {      setSendError('reCAPTCHA not ready. Please try again in a moment.');

                  </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

                  <div>

                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">          {/* Contact Information */}          recaptchaToken = await executeRecaptcha('contact_form');      return;

                      Email

                    </label>          <ScrollAnimateSection animation="fade-left" delay={200}>

                    <input

                      type="email"            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Let's Connect</h3>        } catch (error) {    }

                      id="email"

                      name="email"            <p className="text-gray-700 mb-8 text-sm sm:text-base">

                      value={formData.email}

                      onChange={handleChange}              Whether you have a project in mind, need consultation on business analysis,           console.warn('reCAPTCHA not available in development mode');

                      required

                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"              or want to discuss project management opportunities, I'm here to help.

                      placeholder="your.email@example.com"

                    />            </p>        }    setSending(true);

                  </div>



                  <div>

                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">            <div className="space-y-6">      }    setSendError('');

                      Message

                    </label>              <div className="flex items-start">

                    <textarea

                      id="message"                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">

                      name="message"

                      value={formData.message}                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600" />

                      onChange={handleChange}

                      required                </div>      // Send email with EmailJS    try {

                      rows={5}

                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 resize-none text-sm sm:text-base"                <div>

                      placeholder="Tell me about your project or how I can help you..."

                    />                  <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Email</h4>      await emailjs.send(      // Execute reCAPTCHA v3

                  </div>

                  <a 

                  <div className="text-xs text-gray-500 mb-4">

                    <p>🔒 Protected by reCAPTCHA v3 - No checkboxes required!</p>                    href="mailto:contact@sakhawatsifat.me"        'service_zn8g4tp',      const recaptchaToken = await executeRecaptcha('contact_form');

                  </div>

                    className="text-teal-600 hover:text-teal-700 transition-colors duration-200 text-sm sm:text-base break-all"

                  {sendError && (

                    <p className="text-red-500 text-sm mb-2">{sendError}</p>                  >        'template_uk1va6i',      

                  )}

                                      contact@sakhawatsifat.me

                  <button

                    type="submit"                  </a>        {      if (!recaptchaToken) {

                    className="w-full btn-primary group flex items-center justify-center disabled:opacity-50"

                    disabled={sending}                </div>

                  >

                    <Send size={20} className="mr-2 group-hover:animate-bounce-gentle" />              </div>          from_name: formData.name,        setSendError('Security verification failed. Please refresh the page and try again.');

                    {sending ? 'Sending...' : 'Send Message'}

                  </button>

                </form>

              )}              <div className="flex items-start">          from_email: formData.email,        setSending(false);

            </div>

          </ScrollAnimateSection>                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">

        </div>

      </div>                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />          message: formData.message,        return;

    </section>

  );                </div>

};

                <div>          'g-recaptcha-response': recaptchaToken,      }

export default Contact;
                  <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Location</h4>

                  <p className="text-gray-600 text-sm sm:text-base">Mirpur, Dhaka, Bangladesh</p>        },

                </div>

              </div>        '-sasBOCdMpP7gnvr6'      // Prepare EmailJS configuration



              <div className="flex items-start">      );      const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_zn8g4tp';

                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">

                  <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />            const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_uk1va6i';

                </div>

                <div>      setIsSubmitted(true);      

                  <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">LinkedIn</h4>

                  <a       setTimeout(() => setIsSubmitted(false), 3000);      console.log('EmailJS Config:', { serviceID, templateID }); // Debug log

                    href="https://www.linkedin.com/in/hossain-sakhawat/"

                    target="_blank"      setFormData({ name: '', email: '', message: '' });

                    rel="noopener noreferrer"

                    className="text-purple-600 hover:text-purple-700 transition-colors duration-200 text-sm sm:text-base"    } catch (error) {      // Send email with EmailJS

                  >

                    Connect with me      console.error('Error sending email:', error);      const result = await emailjs.send(

                  </a>

                </div>      setSendError('Failed to send message. Please try again later.');        serviceID, // EmailJS service ID

              </div>

            </div>    } finally {        templateID, // EmailJS template ID

          </ScrollAnimateSection>

      setSending(false);        {

          {/* Contact Form */}

          <ScrollAnimateSection animation="fade-right" delay={400}>    }          from_name: formData.name,

            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover-lift">

              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>  };          from_email: formData.email,

              

              {isSubmitted ? (          message: formData.message,

                <div className="text-center py-8">

                  <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 text-green-500 mx-auto mb-4 animate-scale-in" />  return (          to_name: 'Sakhawat Hossain',

                  <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Message Sent!</h4>

                  <p className="text-gray-600 text-sm sm:text-base">Thank you for reaching out. I'll get back to you soon.</p>    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gray-50">          reply_to: formData.email,

                </div>

              ) : (      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">        }

                <form onSubmit={handleSubmit} className="space-y-6">

                  <div>        <ScrollAnimateSection className="text-center mb-12 sm:mb-16">      );

                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">

                      Name          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">

                    </label>

                    <input            Get In Touch      if (result.status === 200) {

                      type="text"

                      id="name"          </h2>        setIsSubmitted(true);

                      name="name"

                      value={formData.name}          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">        setTimeout(() => setIsSubmitted(false), 5000);

                      onChange={handleChange}

                      required            Ready to discuss your next project? I'd love to hear from you and explore how we can work together.        setFormData({ name: '', email: '', message: '' });

                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"

                      placeholder="Your full name"          </p>      } else {

                    />

                  </div>        </ScrollAnimateSection>        throw new Error('Email service returned an error');



                  <div>      }

                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">

                      Email        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">    } catch (error) {

                    </label>

                    <input          {/* Contact Information */}      console.error('Error sending email:', error);

                      type="email"

                      id="email"          <ScrollAnimateSection animation="fade-left" delay={200}>      if (error instanceof Error) {

                      name="email"

                      value={formData.email}            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Let's Connect</h3>        setSendError(`Failed to send message: ${error.message}. Please try again later.`);

                      onChange={handleChange}

                      required            <p className="text-gray-700 mb-8 text-sm sm:text-base">      } else {

                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"

                      placeholder="your.email@example.com"              Whether you have a project in mind, need consultation on business analysis,         setSendError('Failed to send message. Please check your internet connection and try again.');

                    />

                  </div>              or want to discuss project management opportunities, I'm here to help.      }



                  <div>            </p>    } finally {

                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">

                      Message      setSending(false);

                    </label>

                    <textarea            <div className="space-y-6">    }

                      id="message"

                      name="message"              <div className="flex items-start">  }, [formData, executeRecaptcha]);

                      value={formData.message}

                      onChange={handleChange}                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">

                      required

                      rows={5}                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600" />  return (

                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 resize-none text-sm sm:text-base"

                      placeholder="Tell me about your project or how I can help you..."                </div>    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gray-50">

                    />

                  </div>                <div>      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">



                  <div className="text-xs text-gray-500 mb-4">                  <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Email</h4>        <ScrollAnimateSection className="text-center mb-12 sm:mb-16">

                    <p>🔒 Protected by reCAPTCHA v3 - No checkboxes required!</p>

                  </div>                  <a           <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">



                  {sendError && (                    href="mailto:contact@sakhawatsifat.me"            Get In Touch

                    <p className="text-red-500 text-sm mb-2">{sendError}</p>

                  )}                    className="text-teal-600 hover:text-teal-700 transition-colors duration-200 text-sm sm:text-base break-all"          </h2>

                  

                  <button                  >          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">

                    type="submit"

                    className="w-full btn-primary group flex items-center justify-center disabled:opacity-50"                    contact@sakhawatsifat.me            Ready to discuss your next project? I'd love to hear from you and explore how we can work together.

                    disabled={sending}

                  >                  </a>          </p>

                    <Send size={20} className="mr-2 group-hover:animate-bounce-gentle" />

                    {sending ? 'Sending...' : 'Send Message'}                </div>        </ScrollAnimateSection>

                  </button>

                </form>              </div>

              )}

            </div>        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

          </ScrollAnimateSection>

        </div>              <div className="flex items-start">          {/* Contact Information */}

      </div>

    </section>                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">          <ScrollAnimateSection animation="fade-left" delay={200}>

  );

};                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Let's Connect</h3>



export default Contact;                </div>            <p className="text-gray-700 mb-8 text-sm sm:text-base">

                <div>              Whether you have a project in mind, need consultation on business analysis, 

                  <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Location</h4>              or want to discuss project management opportunities, I'm here to help.

                  <p className="text-gray-600 text-sm sm:text-base">Mirpur, Dhaka, Bangladesh</p>            </p>

                </div>

              </div>            <div className="space-y-6">

              <div className="flex items-start">

              <div className="flex items-start">                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">

                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600" />

                  <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />                </div>

                </div>                <div>

                <div>                  <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Email</h4>

                  <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">LinkedIn</h4>                  <a 

                  <a                     href="mailto:contact@sakhawatsifat.me"

                    href="https://www.linkedin.com/in/hossain-sakhawat/"                    className="text-teal-600 hover:text-teal-700 transition-colors duration-200 text-sm sm:text-base break-all"

                    target="_blank"                  >

                    rel="noopener noreferrer"                    contact@sakhawatsifat.me

                    className="text-purple-600 hover:text-purple-700 transition-colors duration-200 text-sm sm:text-base"                  </a>

                  >                </div>

                    Connect with me              </div>

                  </a>

                </div>              <div className="flex items-start">

              </div>                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">

            </div>                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />

          </ScrollAnimateSection>                </div>

                <div>

          {/* Contact Form */}                  <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Location</h4>

          <ScrollAnimateSection animation="fade-right" delay={400}>                  <p className="text-gray-600 text-sm sm:text-base">Mirpur, Dhaka, Bangladesh</p>

            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover-lift">                </div>

              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>              </div>

              

              {isSubmitted ? (              <div className="flex items-start">

                <div className="text-center py-8">                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">

                  <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 text-green-500 mx-auto mb-4 animate-scale-in" />                  <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />

                  <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Message Sent!</h4>                </div>

                  <p className="text-gray-600 text-sm sm:text-base">Thank you for reaching out. I'll get back to you soon.</p>                <div>

                </div>                  <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">LinkedIn</h4>

              ) : (                  <a 

                <form onSubmit={handleSubmit} className="space-y-6">                    href="https://www.linkedin.com/in/hossain-sakhawat/"

                  <div>                    target="_blank"

                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">                    rel="noopener noreferrer"

                      Name                    className="text-purple-600 hover:text-purple-700 transition-colors duration-200 text-sm sm:text-base"

                    </label>                  >

                    <input                    Connect with me

                      type="text"                  </a>

                      id="name"                </div>

                      name="name"              </div>

                      value={formData.name}            </div>

                      onChange={handleChange}          </ScrollAnimateSection>

                      required

                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"          {/* Contact Form */}

                      placeholder="Your full name"          <ScrollAnimateSection animation="fade-right" delay={400}>

                    />            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover-lift">

                  </div>              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>

              

                  <div>              {isSubmitted ? (

                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">                <div className="text-center py-8">

                      Email                  <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 text-green-500 mx-auto mb-4 animate-scale-in" />

                    </label>                  <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Message Sent!</h4>

                    <input                  <p className="text-gray-600 text-sm sm:text-base">Thank you for reaching out. I'll get back to you soon.</p>

                      type="email"                </div>

                      id="email"              ) : (

                      name="email"                <form onSubmit={handleSubmit} className="space-y-6">

                      value={formData.email}                  <div>

                      onChange={handleChange}                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">

                      required                      Name

                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"                    </label>

                      placeholder="your.email@example.com"                    <input

                    />                      type="text"

                  </div>                      id="name"

                      name="name"

                  <div>                      value={formData.name}

                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">                      onChange={handleChange}

                      Message                      required

                    </label>                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"

                    <textarea                      placeholder="Your full name"

                      id="message"                    />

                      name="message"                  </div>

                      value={formData.message}

                      onChange={handleChange}                  <div>

                      required                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">

                      rows={5}                      Email

                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 resize-none text-sm sm:text-base"                    </label>

                      placeholder="Tell me about your project or how I can help you..."                    <input

                    />                      type="email"

                  </div>                      id="email"

                      name="email"

                  <div className="text-xs text-gray-500 mb-4">                      value={formData.email}

                    <p>🔒 Protected by reCAPTCHA v3 - No checkboxes required!</p>                      onChange={handleChange}

                  </div>                      required

                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"

                  {sendError && (                      placeholder="your.email@example.com"

                    <p className="text-red-500 text-sm mb-2">{sendError}</p>                    />

                  )}                  </div>

                  

                  <button                  <div>

                    type="submit"                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">

                    className="w-full btn-primary group flex items-center justify-center disabled:opacity-50"                      Message

                    disabled={sending}                    </label>

                  >                    <textarea

                    <Send size={20} className="mr-2 group-hover:animate-bounce-gentle" />                      id="message"

                    {sending ? 'Sending...' : 'Send Message'}                      name="message"

                  </button>                      value={formData.message}

                </form>                      onChange={handleChange}

              )}                      required

            </div>                      rows={5}

          </ScrollAnimateSection>                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 resize-none text-sm sm:text-base"

        </div>                      placeholder="Tell me about your project or how I can help you..."

      </div>                    />

    </section>                  </div>

  );

};                  <div className="text-xs text-gray-500 mb-4">

                    <p>🔒 Protected by reCAPTCHA v3 - No checkboxes required!</p>

export default Contact;                    <p className="mt-1">By submitting this form, you agree to Google's Privacy Policy and Terms of Service.</p>
                  </div>

                  {sendError && (
                    <div className="flex items-start space-x-2 p-3 bg-red-50 border border-red-200 rounded-lg mb-4">
                      <AlertCircle size={16} className="text-red-500 mt-0.5 flex-shrink-0" />
                      <p className="text-red-700 text-sm">{sendError}</p>
                    </div>
                  )}
                  
                  <button
                    type="submit"
                    className="w-full btn-primary group flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={sending || !formData.name.trim() || !formData.email.trim() || !formData.message.trim()}
                  >
                    {sending ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} className="mr-2 group-hover:animate-bounce-gentle" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </ScrollAnimateSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;