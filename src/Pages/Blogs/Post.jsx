import React from 'react';
import { useParams } from 'react-router-dom';
import { Posts } from './Posts.js';
import BlogsNav from './BlogsNav.jsx';
import BlogsMobileNav from './BlogsMobileNav.jsx';
import BlogsFooter from './BlogsFooter.jsx'
import BlogsGrid from './Aside.jsx';

const Post = () => {
  const { id } = useParams();
  const post = Posts.find(p => p.id.toString() === id);

  if (!post) {
    return <h2>Post not found</h2>;
  }

  // Replace newlines with <br />
  const formatContent = (content) => {
    return content.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  };

  return (
    <div>
      <div className='md:mb-[10vw]'> 
        <BlogsNav />
        <BlogsMobileNav />
          <div className='w-full h-[11vw] bg-primary-800 md:h-[7vw]'></div>
          <div className='w-full'>
            <img className='w-full' src={post.img} alt={post.title} />
          </div>
        <div className='flex'>
          <div className='p-[5vw] md:w-2/3'>
            <h1 className='text-[6vw] md:text-[3vw] font-bold text-primary-100'>{post.title}</h1>
            <h2 className='text-[4vw] md:text-[1.7vw] text-primary-100 mb-[5vw]'>{post.subtitle}</h2>
            <p className='text-primary-300'>{post.date}</p>
            <p className='text-primary-100 md:text-[1.5vw]'>{formatContent(post.content)}</p>
          </div>
          <div className='hidden md:flex w-1/3 justify-center overflow-hidden'>
            <BlogsGrid />
          </div>
        </div>
      </div>
        <BlogsFooter />
    </div>
  );
};

export default Post;
