import React, { useState } from 'react';
import './posts.css';

export default function Posts({ posts, loading }) {
  return (
    <div className="container">
      {posts.map((post, index) => {
        return <li>{post.title}</li>;
      })}
    </div>
  );
}
