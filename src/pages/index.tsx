import Head from 'next/head';
import { useEffect, useState } from 'react';
import api from '../services/newsapi';

interface PostsProps {
  title: string;
  url: string;
  author: string;
  description: string;
}

export default function Home() {
  const [posts, setPosts] = useState<PostsProps[]>([]);

  useEffect(() => {
    api.get<PostsProps[]>('').then(response => {
      setPosts(response.data.articles);
    });
  }, []);

  return (
    <>
      <Head>
        <title>Home | Newsapi</title>

      </Head>
      <h1 className="mx-auto p-5">
        Check out the latest Tech Crunch News!
      </h1>

      <ul>
          {posts.map(post =>
            <div key={post.title} className="list-group de w-50 p-1">
              <a  href={post.url} target="_blank" rel="noreferrer" className="list-group-item list-group-item-action">
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1">{post.title}</h5>
                </div>
                <p className="mb-1">{post.description}</p>
                <small className="text-muted">By {post.author}</small>
              </a>
            </div>
          )}
      </ul>
    </>
  )
}
