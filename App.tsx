import React, { useEffect, useState } from 'react';
import './style.css';
import axios from 'axios';
import Posts from './components/Posts.js';

export default function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(9);

  const fetchPosts = async () => {
    setLoading(true);
    let res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    console.log(res);
    setPosts(res.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <Posts posts={posts} losding={loading} />
    </div>
  );
}
