import React, { useEffect, useState } from 'react';
import './style.css';
import axios from 'axios';
import Posts from './components/Posts.js';
import Pagination from './components/Pagination.js';

export default function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  const fetchPosts = async () => {
    setLoading(true);
    let res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    console.log(res);
    setPosts(res.data);
    setLoading(false);
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <Posts posts={currentPosts} losding={loading} />
      <Pagination totalPosts={posts.length} postsPerPage={postsPerPage} />
    </div>
  );
}
