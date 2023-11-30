import React from 'react';
import './App.css';

import Card from './components/Card';
import TheFooter from './components/TheFooter';
import posts from './data/posts';
import TheHeader from './components/TheHeader';

function App() {
  const uniqueTags = Array.from(new Set(posts.map((post) => post.tags).flat()));
  const publishedPosts = posts.filter((post) => post.published);

  return (
    <>
      <TheHeader tags={uniqueTags} />

      <div className="pt-16">
        <h1 className="mb-4 mt-3 text-center text-5xl font-bold text-gray-900">
          Un Blog a caso
        </h1>

        <div className="mx-auto w-[80vw] pb-[12vh]">
          {publishedPosts.length > 0 && (
            <div className="flex flex-wrap justify-center gap-4">
              {publishedPosts.map((post) => (
                <Card
                  key={post.id}
                  title={post.title}
                  content={post.content}
                  tags={post.tags}
                  published={post.published}
                />
              ))}
            </div>
          )}
          {publishedPosts.length === 0 && (
            <h2 className="mt-8 text-center text-xl font-bold text-red-900">
              Non ci sono post da mostrare al momento.
            </h2>
          )}
        </div>
      </div>

      <TheFooter />
    </>
  );
}

export default App;
