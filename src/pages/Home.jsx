import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, Post } from "../components";
function Home() {
  const [post, setPost] = useState([]);
  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPost(posts.documents);
      }
    });
  }, []);
  if (post.length === 0) {
    return (
      <Container>
        <div className="flex flex-wrap">
          <div className="p-2 w-full">
            <h1 className="text-2xl font-bold hover:text-gray-500">
              Login to Read Posts
            </h1>
          </div>
        </div>
      </Container>
    );
  }
  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {post.map((post) => (
            <div key={post.$id} className="p-2 w-1/4">
              <Post {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
