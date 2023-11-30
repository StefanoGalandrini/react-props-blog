import React from 'react';

function TheHeader({ tags }) {
  const tagColors = {
    html: 'bg-orange-700',
    css: 'bg-blue-700',
    js: 'bg-yellow-600',
    php: 'bg-gray-600',
  };

  return (
    <header className="fixed top-0 flex h-[5vh] w-full items-center bg-gray-900 p-4 text-gray-100 shadow-md">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-4">
          <span>Tags: </span>
          {tags.map((tag, index) => (
            <span
              key={index}
              className={`rounded px-2 py-0.5 text-sm ${
                tagColors[tag] || 'bg-gray-200'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </header>
  );
}

export default TheHeader;
