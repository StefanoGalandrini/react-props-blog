import React from 'react';
import getRandomImage from '../utilities/getRandomImage';

function Card({ title, content, tags, published }) {
  if (!published) return null;

  const tagColors = {
    html: 'bg-orange-700',
    css: 'bg-blue-500',
    js: 'bg-yellow-600',
    php: 'bg-gray-600',
  };

  const imageUrl = getRandomImage();

  return (
    <div className="flex items-stretch justify-center">
      <div className="max-w-xs overflow-hidden rounded-xl border border-gray-400 bg-gray-200 shadow-lg">
        <img className="w-full" src={imageUrl} alt="Immagine del post" />
        <div className="p-6 pb-3">
          <div className="mb-2 text-center text-2xl font-bold uppercase text-gray-900">
            {title}
          </div>
          <p className="text-base text-gray-700">{content}</p>
        </div>

        <div className="mb-2 flex justify-center gap-2 text-base italic text-gray-900">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={`py-0.25 rounded-md px-2 not-italic text-gray-100 ${
                tagColors[tag] || 'bg-gray-500'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex justify-center pb-4">
          <button className="mt-3 rounded bg-gray-700 px-4 py-1.5 font-bold text-white delay-200 hover:bg-yellow-600">
            Leggi di più
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
