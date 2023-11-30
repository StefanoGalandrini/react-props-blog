import React from 'react';
import postImage from '../assets/imgs/one.jpg';

function Card() {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="max-w-md overflow-hidden rounded-2xl border border-gray-400 bg-gray-200 shadow-lg">
          <img className="w-full" src={postImage} alt="Contenuto del post" />
          <div className="p-6">
            <div className="mb-2 text-center text-2xl font-bold uppercase text-gray-900">
              Siamo uno, ma diversi
            </div>
            <p className="text-base text-gray-700">
              La copertina di questo singolo riprende il modo in cui i nativi
              americani usavano cacciare i bufali spaventandoli per farli
              precipitare in un dirupo. Allo stesso modo l’essere umano fugge da
              ciò che non capisce e corre verso la sua distruzione. Questo è il
              senso di “One”, una canzone triste ma ricca di speranza. Comunque
              mai capita.
            </p>
            <p className="mt-2 text-base italic text-gray-900">
              «Siamo la stessa cosa, ma non siamo uguali... abbiamo la
              possibilità di sostenerci l’un l’altro, come una cosa sola»
              <p className="not-italic">(© U2)</p>
            </p>
          </div>
          <div className="flex justify-center pb-4">
            <button className="rounded bg-yellow-700 px-4 py-2 font-bold text-white delay-200 hover:bg-yellow-600">
              Leggi di più
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
