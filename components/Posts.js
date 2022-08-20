import React, { useState } from 'react';
import './posts.css';

export default function Posts({ posts, loading }) {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="container">
      {posts.map((post, index) => {
        return <li>{post.title}</li>;
      })}
    </div>
  );
}
