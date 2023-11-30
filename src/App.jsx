import React from 'react';
import './App.css';

import Card from './components/Card';
import TheFooter from './components/TheFooter';
import posts from './data/posts';

function App() {
  const uniqueTags = Array.from(new Set(posts.map((post) => post.tags).flat()));

  return (
    <>
      <h1 className="mb-4 mt-3 text-center text-5xl font-bold text-gray-900">
        Un Blog a caso
      </h1>
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
    </>
  );
}

export default App;
