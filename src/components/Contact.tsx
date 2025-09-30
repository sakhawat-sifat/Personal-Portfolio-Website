import { useState } from 'react';
import { Mail, MapPin, Linkedin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import ScrollAnimateSection from './ScrollAnimateSection';
import emailjs from 'emailjs-com';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const { executeRecaptcha } = useGoogleReCaptcha();

  // EmailJS configuration from environment variables
  const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_zn8g4tp';
  const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_uk1va6i';
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '-sasBOCdMpP7gnvr6';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (submitStatus === 'error') {
      setSubmitStatus('idle');
      setErrorMessage('');
    }
  };

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      setErrorMessage('Name is required');
      return false;
    }
    
    if (!formData.email.trim()) {
      setErrorMessage('Email is required');
      return false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage('Please enter a valid email address');
      return false;
    }
    
    if (!formData.message.trim()) {
      setErrorMessage('Message is required');
      return false;
    }
    
    if (formData.message.length < 10) {
      setErrorMessage('Message must be at least 10 characters long');
      return false;
    }
    
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      // Execute reCAPTCHA
      if (!executeRecaptcha) {
        throw new Error('reCAPTCHA is not properly loaded. Please refresh the page and try again.');
      }

      console.log('Executing reCAPTCHA...');
      const recaptchaToken = await executeRecaptcha('contact_form');
      
      if (!recaptchaToken) {
        throw new Error('Failed to obtain reCAPTCHA token. Please try again.');
      }

      console.log('reCAPTCHA token obtained successfully');
      
      // Prepare email template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Sakhawat Hossain',
        recaptcha_token: recaptchaToken
      };

      console.log('Sending email via EmailJS...');
      // Send email using EmailJS
      const result = await emailjs.send(serviceID, templateID, templateParams, publicKey);

      console.log('EmailJS Result:', result);
      if (result.status === 200) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      
      if (error instanceof Error) {
        if (error.message.includes('reCAPTCHA')) {
          setErrorMessage(error.message);
        } else {
          setErrorMessage('Failed to send message. Please try again or contact me directly at contact@sakhawatsifat.me');
        }
      } else {
        setErrorMessage('Failed to send message. Please try again or contact me directly at contact@sakhawatsifat.me');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <ScrollAnimateSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 sm:animate-fade-in-up">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto sm:animate-fade-in-up sm:animation-delay-200">
              Ready to discuss your next project? I'd love to hear from you and explore how we can work together.
            </p>
          </div>
        </ScrollAnimateSection>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <ScrollAnimateSection>
            <div className="space-y-8 sm:animate-fade-in-up sm:animation-delay-300">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Let's Connect
                </h3>
                <p className="text-gray-600 mb-8">
                  Whether you have a project in mind, need consultation on business analysis, or want to discuss project management opportunities, I'm here to help.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Mail className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 text-lg">Email</h4>
                    <a 
                      href="mailto:contact@sakhawatsifat.me" 
                      className="text-teal-600 hover:text-teal-700 transition-colors text-lg"
                    >
                      contact@sakhawatsifat.me
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 text-lg">Location</h4>
                    <p className="text-gray-600 text-lg">Mirpur, Dhaka, Bangladesh</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Linkedin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 text-lg">LinkedIn</h4>
                    <a 
                      href="https://linkedin.com/in/sakhawat-hossain" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-700 transition-colors text-lg"
                    >
                      Connect with me
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimateSection>

          <ScrollAnimateSection>
            <div className="sm:animate-fade-in-up sm:animation-delay-400">
              {submitStatus === 'success' ? (
                // Success Message - Replaces the entire form
                <div className="text-center py-16">
                  <CheckCircle className="w-16 h-16 sm:w-20 sm:h-20 text-green-500 mx-auto mb-6 animate-scale-in" />
                  <h4 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">Message Sent!</h4>
                  <p className="text-gray-600 text-lg sm:text-xl mb-8">Thank you for reaching out. I'll get back to you soon.</p>
                  <button
                    onClick={() => {
                      setSubmitStatus('idle');
                      setFormData({ name: '', email: '', message: '' });
                    }}
                    className="bg-teal-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-teal-700 hover:scale-105 hover:shadow-lg"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors bg-white"
                    placeholder="Your full name"
                    disabled={isSubmitting}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors bg-white"
                    placeholder="your.email@example.com"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors resize-none bg-white"
                    placeholder="Tell me about your project or how I can help you..."
                    disabled={isSubmitting}
                  />
                </div>

                {submitStatus === 'error' && (
                  <div className="flex items-center space-x-2 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <AlertCircle className="w-5 h-5 text-red-600" />
                    <p className="text-red-700">{errorMessage}</p>
                  </div>
                )}

                {/* reCAPTCHA Notice - Hidden with CSS */}
                <div className="space-y-2 hidden">
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="mr-2">🔒</span>
                    <span>Protected by reCAPTCHA v3 - No checkboxes required!</span>
                  </div>
                  <p className="text-xs text-gray-400">
                    By submitting this form, you agree to Google's{' '}
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">
                      Privacy Policy
                    </a>{' '}
                    and{' '}
                    <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">
                      Terms of Service
                    </a>.
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-teal-600 hover:bg-teal-700 disabled:bg-gray-400 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 group"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      <span>Send Message</span>
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