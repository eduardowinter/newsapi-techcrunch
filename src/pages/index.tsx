import Head from 'next/head';
import { useEffect, useState } from 'react';
import api from '../services/newsapi';


interface PostList {
  articles: Array<PostsProps>;
}

interface PostsProps {
  title: string;
  url: string;
  author: string;
  description: string;
}

export default function Home() {
  const [posts, setPosts] = useState<PostsProps[]>([]);

  useEffect(() => {
    api.get<PostList>('').then(response => {
      setPosts(response.data.articles);
    });
  }, []);

  return (
    <>
      <Head>
        <title>NewsAPI | TechCrunch News</title>
      </Head>

      <div className="row d-flex justify-content-center mt-100 mb-100">                                                    
        <div className="col-lg-6">      
          <div className="card">
              <div className="card-body text-center">
                  <h4 className="card-title m-b-0">NewsAPI - TechCrunch News</h4>
              </div>
              <ul className="list-style-none">
                {posts.map(post =>
                  <li key={post.title} className="d-flex no-block card-body border-top">
                      <div>
                          <a href={post.url} target="_blank" rel="noreferrer" className="mb-2 font-medium p-0" data-abc="true">{post.title}</a>
                          <span className="text-muted">{post.description}</span>
                          <div className="text-right">
                            <small className="text-muted">By {post.author}</small>
                          </div>
                      </div>

                  </li>
                )}        
              </ul>
          </div>
        </div>
      </div>                
    </>
  )
}
