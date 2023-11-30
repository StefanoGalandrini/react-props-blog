import React from 'react';
import './App.css';

import Card from './components/Card';
import TheFooter from './components/TheFooter';
import posts from './data/posts';
import TheHeader from './components/TheHeader';

function App() {
  const uniqueTags = Array.from(new Set(posts.map((post) => post.tags).flat()));

  return (
    <>
      <TheHeader tags={uniqueTags} />

      <div className="pt-16">
        <h1 className="mb-4 mt-3 text-center text-5xl font-bold text-gray-900">
          Un Blog a caso
        </h1>

        <div className="container mx-auto pb-[12vh]">
          <div className="flex flex-wrap justify-center gap-4">
            {posts
              .filter((post) => post.published)
              .map((post) => (
                <Card
                  key={post.id}
                  title={post.title}
                  content={post.content}
                  tags={post.tags}
                  published={post.published}
                />
              ))}
            <TheFooter />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
