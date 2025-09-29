import { useState, useEffect, useCallback } from 'react';
import emailjs from 'emailjs-com';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { Mail, MapPin, Linkedin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import ScrollAnimateSection from './ScrollAnimateSection';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState('');
  
  const { executeRecaptcha } = useGoogleReCaptcha();

  // Initialize EmailJS
  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '-sasBOCdMpP7gnvr6';
    emailjs.init(publicKey);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form data
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSendError('Please fill in all required fields.');
      return;
    }

    if (!executeRecaptcha) {
      setSendError('reCAPTCHA not ready. Please try again in a moment.');
      return;
    }

    setSending(true);
    setSendError('');

    try {
      // Execute reCAPTCHA v3
      const recaptchaToken = await executeRecaptcha('contact_form');
      
      if (!recaptchaToken) {
        setSendError('Security verification failed. Please refresh the page and try again.');
        setSending(false);
        return;
      }

      // Prepare EmailJS configuration
      const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_zn8g4tp';
      const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_uk1va6i';
      
      console.log('EmailJS Config:', { serviceID, templateID }); // Debug log

      // Send email with EmailJS
      const result = await emailjs.send(
        serviceID, // EmailJS service ID
        templateID, // EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Sakhawat Hossain',
          reply_to: formData.email,
        }
      );

      if (result.status === 200) {
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 5000);
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Email service returned an error');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      if (error instanceof Error) {
        setSendError(`Failed to send message: ${error.message}. Please try again later.`);
      } else {
        setSendError('Failed to send message. Please check your internet connection and try again.');
      }
    } finally {
      setSending(false);
    }
  }, [formData, executeRecaptcha]);

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimateSection className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to discuss your next project? I'd love to hear from you and explore how we can work together.
          </p>
        </ScrollAnimateSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <ScrollAnimateSection animation="fade-left" delay={200}>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Let's Connect</h3>
            <p className="text-gray-700 mb-8 text-sm sm:text-base">
              Whether you have a project in mind, need consultation on business analysis, 
              or want to discuss project management opportunities, I'm here to help.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-teal-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-teal-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Email</h4>
                  <a 
                    href="mailto:contact@sakhawatsifat.me"
                    className="text-teal-600 hover:text-teal-700 transition-colors duration-200 text-sm sm:text-base break-all"
                  >
                    contact@sakhawatsifat.me
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">Location</h4>
                  <p className="text-gray-600 text-sm sm:text-base">Mirpur, Dhaka, Bangladesh</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">LinkedIn</h4>
                  <a 
                    href="https://www.linkedin.com/in/hossain-sakhawat/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 hover:text-purple-700 transition-colors duration-200 text-sm sm:text-base"
                  >
                    Connect with me
                  </a>
                </div>
              </div>
            </div>
          </ScrollAnimateSection>

          {/* Contact Form */}
          <ScrollAnimateSection animation="fade-right" delay={400}>
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover-lift">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Send a Message</h3>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 text-green-500 mx-auto mb-4 animate-scale-in" />
                  <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Message Sent!</h4>
                  <p className="text-gray-600 text-sm sm:text-base">Thank you for reaching out. I'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 text-sm sm:text-base"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 resize-none text-sm sm:text-base"
                      placeholder="Tell me about your project or how I can help you..."
                    />
                  </div>

                  <div className="text-xs text-gray-500 mb-4">
                    <p>🔒 Protected by reCAPTCHA v3 - No checkboxes required!</p>
                    <p className="mt-1">By submitting this form, you agree to Google's Privacy Policy and Terms of Service.</p>
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