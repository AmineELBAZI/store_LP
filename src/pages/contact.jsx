import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import emailjs from 'emailjs-com';
import { useAddKeyframes, fadeInAnimation, fadeOutAnimation } from "../components/animationUtils.jsx";

const Contact = () => {
  useAddKeyframes();
  const [searchParams] = useSearchParams();
  const objectTitle = searchParams.get('Object');

  // State to hold form data
  const [formData, setFormData] = useState({
    firstName: '',
    company: '',
    email: '',
    position: '',
    phone: '',
    subject: objectTitle || '', // Default to objectTitle if it exists in query params
    message: '',
  });

  // Handle form field changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if a file is provided
    const emailData = {
      to_name: "Destinataire",
      from_name: formData.firstName || 'Nom non spécifié',
      company: formData.company || 'Entreprise non spécifiée',
      email: formData.email || 'Email non spécifié',
      position: formData.position || 'Poste non spécifié',
      phone: formData.phone || 'Téléphone non spécifié',
      subject: formData.subject || 'Aucun sujet',
      message: formData.message || 'Aucun message',
      objectTitle: objectTitle || 'Titre non spécifié',
      file: formData.file ? {
        name: formData.file.name,
        type: formData.file.type,
        size: formData.file.size,
      } : null, // Handle absence of file
    };

    console.log(emailData); // Check the data before sending

    // Send the email via EmailJS
    emailjs
      .send(
        'service_sge31sw', // Your service ID
        'template_8825utg', // Your template ID
        emailData,
        'TZ94hkSpvPX-s5UuM' // Your user ID
      )
      .then(
        () => {
          alert('Email envoyé avec succès!');
        },
        (error) => {
          console.error('Échec de l\'envoi de l\'email:', error.text);
          alert('Échec de l\'envoi de l\'email. Veuillez réessayer.');
        }
      );
  };

  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-gray-100 dark:bg-gray-900 p-3">
      <div className="text-center w-full relative">
        <section className="w-full lg:p-12">
          <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
            <div className="md:flex gap-x-12 lg:mb-16 mb-10 relative">
              {/* Left Column */}
              <div className="md:w-1/2 mb-8 md:mb-0 p-2">
                <h2 className="text-cyan-950 font-manrope text-4xl lg:text-4xl  font-bold leading-10 mb-5 text-center lg:text-left dark:text-white hover:text-lime-600  duration-700" style={fadeInAnimation}>
                  Contactez-nous
                </h2>
                <p className="text-gray-800 text-2xl font-normal leading-7 mb-7 text-center lg:text-left m-10 dark:text-white hover:text-lime-600 hover:pl-6 hover:pt-6 duration-700" style={fadeInAnimation}>
                  Que vous ayez une question ou que vous souhaitiez simplement nous dire bonjour, nous sommes là pour faciliter la communication avec vous.
                </p>
                <div className="mb-8 p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
                    <div>
                      <h6 className="text-black text-xl lg:text-2xl xl:text-2xl  font-medium leading-5 pb-3 text-center lg:text-left dark:text-white hover:text-lime-600  duration-700" style={fadeInAnimation}>
                        Responsable technique & commercial :
                      </h6>
                      <h6 className="text-blue-500 font-bold text-xl lg:text-2xl xl:text-2xl   leading-5 pb-3 text-center lg:text-left m-6   hover:pt-6 duration-700" style={fadeInAnimation}>
                        Youssef FAHIM
                      </h6>
                      <h3 className="text-gray-700 text-xl lg:text-2xl xl:text-2xl  font-semibold leading-8 text-center lg:text-left dark:text-white hover:text-lime-600  hover:pt-6 duration-700" style={fadeInAnimation}>
                        E-mail :  youssef.fahim@instrumea.com
                      </h3>
                    </div>
                    <div className='border-l-2 md:border-blue-600 border-gray-200 px-6 md:px-10 py-6 dark:text-white'>
                      <h6 className="text-black text-xl lg:text-2xl xl:text-2xl  font-medium leading-5 pb-3 text-center lg:text-left dark:text-white hover:text-lime-600   duration-700" style={fadeInAnimation}>
                        Assistante administrative:
                      </h6>
                      <h6 className="text-blue-500 text-xl lg:text-2xl xl:text-2xl  font-bold leading-5 pb-3 text-center lg:text-left m-6   hover:pt-6 duration-700" style={fadeInAnimation}>
                        Laurence ROCHE
                      </h6>
                      <h3 className="text-gray-700 text-xl lg:text-2xl xl:text-2xl  font-semibold leading-8 text-center lg:text-left dark:text-white hover:text-lime-600  hover:pt-6 duration-700" style={fadeInAnimation}>
                        E-mail :  laurence.roche@instrumea.com
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              {/* Right Column with Image */}
              <div className="w-full md:w-1/2 border-gray-200 px-6 md:px-10 py-6">
                <img
                  src="/image/callimage.jpg"
                  alt="Illustration de contact"
                  className="w-full h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 
                            shadow-lg rounded-lg rounded-br-full rounded-tr-full rounded-bl-full  
                            hover:rounded-tl-full hover:rounded-bl-none duration-500"
                  style={fadeInAnimation}
                />
              </div>

            </div>
          </div>
          {/* Form Section */}
          <div className="mx-auto w-full px-4 sm:px-6 lg:px-8" style={fadeInAnimation}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {/* Image Section */}
              <div className="border-gray-200 px-6 md:px-10 py-6 hover:scale-105 duration-500">
                <img
                  src="/image/backgroundCc1.jpeg"
                  alt="Illustration de contact"
                  className="w-4/5 h-auto rounded-lg shadow-lg mx-auto"
                  style={fadeInAnimation}
                />
              </div>

              {/* Form Section */}
              <form className="border-l-2 md:border-blue-600 pl-12 grid lg:grid-cols-1 grid-cols-1 p-12 gap-2" onSubmit={handleSubmit}>
                {/* Left Side of the Form */}
                <input
                  type="text"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full h-12 shadow-sm placeholder-gray-400 dark:placeholder-gray-400 text-lg font-normal rounded-full border border-gray-800 focus:outline-none px-4 text-gray-900"
                  placeholder="Nom (obligatoire)"
                />
                <input
                  type="text"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full h-12 shadow-sm placeholder-gray-400 dark:placeholder-gray-400 text-lg font-normal rounded-full border border-gray-800 focus:outline-none px-4 text-gray-900"
                  placeholder="Entreprise (obligatoire)"
                />
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full h-12 shadow-sm placeholder-gray-400 dark:placeholder-gray-400 text-lg font-normal rounded-full border border-gray-800 focus:outline-none px-4 text-gray-900 "
                  placeholder="Email (obligatoire)"
                />
                <input
                  type="text"
                  name="position"
                  required
                  value={formData.position}
                  onChange={handleChange}
                  className="w-full h-12 shadow-sm placeholder-gray-400 dark:placeholder-gray-400 text-lg font-normal rounded-full border border-gray-800 focus:outline-none px-4 text-gray-900 "
                  placeholder="Fonction (obligatoire)"
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full h-12 shadow-sm placeholder-gray-400 dark:placeholder-gray-400 text-lg font-normal rounded-full border border-gray-800 focus:outline-none px-4 text-gray-900 "
                  placeholder="Téléphone"
                />
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full h-12 shadow-sm placeholder-gray-400 dark:placeholder-gray-400 text-lg font-normal rounded-full border border-gray-800 focus:outline-none px-4 text-gray-900 "
                  placeholder="Sujet (obligatoire)"
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full h-40 shadow-sm placeholder-gray-400 dark:placeholder-gray-400 text-lg font-normal rounded-lg border border-gray-800 focus:outline-none px-4 text-gray-900 "
                  placeholder="Votre message"
                />
                <button className="w-full h-12 text-center text-white text-xl font-semibold leading-6 rounded-full bg-blue-600 shadow transition-all duration-700 hover:bg-blue-800">
                  Envoyer
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
