import React from 'react';
import { useSearchParams } from 'react-router-dom';

const Contact = () => {
  const [searchParams] = useSearchParams();
  const objectTitle = searchParams.get('Object');

  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-gray-100 p-3 ">
      <div className="text-center w-full relative">
        <section className="w-full  lg:p-12 bg-white shadow-md rounded-lg">
          <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
            <div className="md:flex gap-x-12 lg:mb-16 mb-10 relative">
              {/* Left Column */}
              <div className="md:w-1/2 mb-8 md:mb-0 p-6">

                <h2 className="text-black font-manrope text-4xl lg:text-4xl font-semibold leading-10 mb-5 text-center lg:text-left">
                  Contactez-nous
                </h2>
                <p className="text-gray-600 text-2xl  font-normal leading-7 mb-7 text-center lg:text-left">
                  Que vous ayez une question ou que vous souhaitiez simplement nous dire bonjour, nous sommes là pour faciliter la communication avec vous.
                </p>
                <div className="mb-8 p-12">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
                    <div>
                      <h6 className="text-black text-2xl font-medium leading-5 pb-3 text-center lg:text-left">
                        Adresse e-mail
                      </h6>
                      <h3 className="text-gray-600 text-2xl font-semibold leading-8 text-center lg:text-left">
                        pagedone@gmail.com
                      </h3>
                    </div>
                    <div>
                      <h6 className="text-black text-2xl font-medium leading-5 pb-3 text-center lg:text-left">
                        Numéro de téléphone
                      </h6>
                      <h3 className="text-gray-600 text-2xl font-semibold leading-8 text-center lg:text-left">
                        470-601-1911
                      </h3>
                    </div>
                  </div>
                </div>

              </div>


              {/* Right Column with Image */}
              <div className="md:w-1/2 border-l-2 md:border-indigo-600 border-gray-200 px-6 md:px-10 py-6">

                <img
                  src="/image/background1.jpg"
                  alt="Illustration de contact"
                  className="w-full h-full rounded-lg shadow-lg"
                />
              </div>

            </div>
          </div>

          <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
            <form className="grid lg:grid-cols-2 grid-cols-1 gap-x-12 p-4">
              <div className="flex flex-col gap-4">
                <input
                  type="text"
                  required
                  className="w-full h-12 shadow-sm text-gray-600 placeholder-gray-400 text-lg font-normal rounded-full border border-gray-200 focus:outline-none px-4"
                  placeholder="Nom (obligatoire)"
                />
                <input
                  type="text"
                  required
                  className="w-full h-12 shadow-sm text-gray-600 placeholder-gray-400 text-lg font-normal rounded-full border border-gray-200 focus:outline-none px-4"
                  placeholder="Entreprise (obligatoire)"
                />
                <input
                  type="email"
                  required
                  className="w-full h-12 shadow-sm text-gray-600 placeholder-gray-400 text-lg font-normal rounded-full border border-gray-200 focus:outline-none px-4"
                  placeholder="Email (obligatoire)"
                />
                <input
                  type="text"
                  required
                  className="w-full h-12 shadow-sm text-gray-600 placeholder-gray-400 text-lg font-normal rounded-full border border-gray-200 focus:outline-none px-4"
                  placeholder="Prénom (obligatoire)"
                />
                <input
                  type="text"
                  required
                  className="w-full h-12 shadow-sm text-gray-600 placeholder-gray-400 text-lg font-normal rounded-full border border-gray-200 focus:outline-none px-4"
                  placeholder="Fonction (obligatoire)"
                />
                <input
                  type="tel"
                  className="w-full h-12 shadow-sm text-gray-600 placeholder-gray-400 text-lg font-normal rounded-full border border-gray-200 focus:outline-none px-4"
                  placeholder="Téléphone"
                />
              </div>
              <div className="flex flex-col gap-4">
                <input
                  type="text"
                  required
                  className="w-full h-12 shadow-sm text-gray-600 placeholder-gray-400 text-lg font-normal rounded-full border border-gray-200 focus:outline-none px-4"
                  placeholder="Sujet (obligatoire)"
                />
                <textarea
                  required
                  className="w-full h-32 shadow-sm resize-none text-gray-600 placeholder-gray-400 text-lg font-normal rounded-2xl border border-gray-200 focus:outline-none px-4 py-2"
                  placeholder="Votre message (obligatoire)"
                ></textarea>
                <input
                  type="file"
                  accept=".xls,.xlsx,.doc,.docx,.ppt,.pdf,.jpg,.jpeg,.png"
                  className="w-full text-gray-600 text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-600 file:text-white hover:file:bg-indigo-700"
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
                <button className="w-full h-12 text-center text-white text-base font-semibold leading-6 rounded-full bg-indigo-600 shadow transition-all duration-700 hover:bg-indigo-800">
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
