import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import emailjs from 'emailjs-com';
import { useAddKeyframes, fadeInAnimation ,fadeOutAnimation } from "../components/animationUtils.jsx";

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
    <div className="flex items-center justify-center w-full min-h-screen bg-gray-100 p-3">
      <div className="text-center w-full relative">
        <section className="w-full lg:p-12 bg-white shadow-md rounded-lg">
          <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
            <div className="md:flex gap-x-12 lg:mb-16 mb-10 relative">
              {/* Left Column */}
              <div className="md:w-1/2 mb-8 md:mb-0 p-2">
                <h2 className="text-black font-manrope text-4xl lg:text-4xl font-semibold leading-10 mb-5 text-center lg:text-left " style={fadeInAnimation}>
                  Contactez-nous
                </h2>
                <p className="text-gray-800 text-2xl font-normal leading-7 mb-7 text-center lg:text-left m-10" style={fadeInAnimation}>
                  Que vous ayez une question ou que vous souhaitiez simplement nous dire bonjour, nous sommes là pour faciliter la communication avec vous.
                </p>
                <div className="mb-8 p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
                    <div>
                      <h6 className="text-black text-2xl font-medium leading-5 pb-3 text-center lg:text-left " style={fadeInAnimation}>
                      Responsable technique & commercial :  
                      </h6>
                      <h6 className="text-blue-700 text-2xl font-medium leading-5 pb-3 text-center lg:text-left m-6" style={fadeInAnimation}>
                      Youssef FAHIM 
                      </h6>
                      <h3 className="text-gray-700 text-2xl font-semibold leading-8 text-center lg:text-left" style={fadeInAnimation}>
                      E-mail :  youssef.fahim@instrumea.com
                      </h3>
                      
                    </div>
                    <div className='border-l-2 md:border-blue-600 border-gray-200 px-6 md:px-10 py-6' >
                      <h6 className="text-black text-2xl font-medium leading-5 pb-3 text-center lg:text-left " style={fadeInAnimation}>
                      Assistante administrative: 
                      </h6>
                      <h6 className="text-blue-700 text-2xl font-medium leading-5 pb-3 text-center lg:text-left m-6" style={fadeInAnimation}>
                      Laurence ROCHE 
                      </h6>
                      <h3 className="text-gray-700 text-2xl font-semibold leading-8 text-center lg:text-left" style={fadeInAnimation}>
                      E-mail :  laurence.roche@instrumea.com
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              {/* Right Column with Image */}
              <div className="md:w-1/2 border-l-2 md:border-blue-600 border-gray-200 px-6 md:px-10 py-6">
                <img
                  src="/image/background1.jpg"
                  alt="Illustration de contact"
                  className="w-full h-full rounded-lg shadow-lg"
                  style={fadeInAnimation}
                />
              </div>
            </div>
          </div>
          {/* Form Section */}
          <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 " style={fadeInAnimation}>
            <form className="grid lg:grid-cols-2 grid-cols-1 gap-x-12 p-4" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-4">
                <input
                  type="text"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full h-12 shadow-sm text-gray-900 placeholder-gray-600 text-lg font-normal rounded-full border border-gray-800 focus:outline-none px-4"
                  placeholder="Nom (obligatoire)"
                />
                <input
                  type="text"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full h-12 shadow-sm text-gray-900 placeholder-gray-600 text-lg font-normal rounded-full border border-gray-800 focus:outline-none px-4"
                  placeholder="Entreprise (obligatoire)"
                />
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full h-12 shadow-sm text-gray-900 placeholder-gray-600 text-lg font-normal rounded-full border border-gray-800 focus:outline-none px-4"
                  placeholder="Email (obligatoire)"
                />
                <input
                  type="text"
                  name="position"
                  required
                  value={formData.position}
                  onChange={handleChange}
                  className="w-full h-12 shadow-sm text-gray-900 placeholder-gray-600 text-lg font-normal rounded-full border border-gray-800 focus:outline-none px-4"
                  placeholder="Fonction (obligatoire)"
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full h-12 shadow-sm text-gray-900 placeholder-gray-600 text-lg font-normal rounded-full border border-gray-800 focus:outline-none px-4"
                  placeholder="Téléphone"
                />
              </div>
              <div className="flex flex-col gap-4">
                <input
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full h-12 shadow-sm text-gray-900 placeholder-gray-600 text-lg font-normal rounded-full border border-gray-800 focus:outline-none px-4"
                  placeholder="Sujet (obligatoire)"
                />
                <textarea
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full h-32 shadow-sm resize-none text-gray-900 placeholder-gray-600 text-lg font-normal rounded-2xl border border-gray-800 focus:outline-none px-4 py-2"
                  placeholder="Votre message (obligatoire)"
                ></textarea>
                <input
                  type="file"
                  accept=".xls,.xlsx,.doc,.docx,.ppt,.pdf,.jpg,.jpeg,.png"
                  className="w-full text-gray-900 text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700"
                />
                <div className="flex items-center gap-2">
                  <input type="checkbox" required />
                  <label className="text-gray-600 text-sm">
                    J'autorise INSTRUMEA à utiliser mes données personnelles pour répondre à ma demande.
                  </label>
                </div>
                <div className="flex items-center gap-2">
                  <input type="checkbox" required />
                  <label className="text-gray-600 text-sm">
                    J'accepte les termes et conditions générales.
                  </label>
                </div>
                <button className="w-full h-12 text-center text-white text-base font-semibold leading-6 rounded-full bg-blue-600 shadow transition-all duration-700 hover:bg-blue-800">
                  Envoyer
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;
