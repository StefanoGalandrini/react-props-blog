import React from 'react';

function TheFooter() {
  return (
    <>
      <footer className="fixed bottom-0 flex h-[8vh] w-full items-center justify-center bg-gray-900 text-gray-100">
        <p>
          &copy; {new Date().getFullYear()} Blog Armonie Diverse. Tutti i
          diritti riservati. Creato con 💀 da Stefano.
        </p>
      </footer>
    </>
  );
}

export default TheFooter;
