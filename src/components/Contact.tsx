import { useState } from 'react';
import { Mail, MapPin, Linkedin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import ScrollAnimateSection from './ScrollAnimateSection';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

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
    
    if (!formData.subject.trim()) {
      setErrorMessage('Subject is required');
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
      // Simulate sending email for now
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
      setErrorMessage('Failed to send message. Please try again or contact me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-6">
        <ScrollAnimateSection>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4 sm:animate-fade-in-up">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto sm:animate-fade-in-up sm:animation-delay-200">
              Have a project in mind or want to discuss opportunities? I'd love to hear from you.
            </p>
          </div>
        </ScrollAnimateSection>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <ScrollAnimateSection>
            <div className="space-y-8 sm:animate-fade-in-up sm:animation-delay-300">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                  Let's Connect
                </h3>
                <p className="text-gray-600 mb-8">
                  I'm always interested in hearing about new projects and opportunities. 
                  Whether you have a question or just want to say hi, feel free to reach out!
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Email</h4>
                    <a 
                      href="mailto:sakhawat.hossain.dev@gmail.com" 
                      className="text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      sakhawat.hossain.dev@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Location</h4>
                    <p className="text-gray-600">Dhaka, Bangladesh</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Linkedin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">LinkedIn</h4>
                    <a 
                      href="https://linkedin.com/in/sakhawat-hossain" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      Connect with me
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimateSection>

          <ScrollAnimateSection>
            <div className="bg-white rounded-xl shadow-lg p-8 sm:animate-fade-in-up sm:animation-delay-400">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Your name"
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
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="your.email@example.com"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="What's this about?"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Tell me about your project or just say hello..."
                    disabled={isSubmitting}
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="flex items-center space-x-2 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <p className="text-green-700">Message sent successfully! I'll get back to you soon.</p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="flex items-center space-x-2 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <AlertCircle className="w-5 h-5 text-red-600" />
                    <p className="text-red-700">{errorMessage}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 group"
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

                <p className="text-sm text-gray-500 text-center">
                  For now, this form simulates sending. Contact me directly at{' '}
                  <a href="mailto:sakhawat.hossain.dev@gmail.com" className="text-blue-600 hover:underline">
                    sakhawat.hossain.dev@gmail.com
                  </a>
                </p>
              </form>
            </div>
          </ScrollAnimateSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;
