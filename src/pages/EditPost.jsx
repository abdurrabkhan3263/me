import React, { useState, useEffect } from "react";
import { Container, PostForm } from "../components";
import appwriteSevice from "../appwrite/config";
import { useParams, useNavigate } from "react-router-dom";
function EditPost() {
  const [post, setPosts] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (slug) {
      appwriteSevice.getPost(slug).then((post) => {
        if (post) setPosts(post);
      });
    } else {
      navigate("/");
    }
  }, [slug, navigate]);
  return post ? (
    <div className="py-8">
      <Container>
        <PostForm post={post} />
      </Container>
    </div>
  ) : null;
}

export default EditPost;
