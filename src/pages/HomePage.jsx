import HomeSlider from "../components/HomeSlider";
import PostCard from "../components/PostCard";
import { supabase } from "../utils/supabaseClient";
import { useState, useEffect } from "react";

const HomePage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    queryPosts(); // ดึงข้อมูลเมื่อ Component โหลดครั้งแรก
  }, []);

  const queryPosts = async () => {
    const { data, error } = await supabase.from("posts").select(`
      id,
      title,
      excerpt,
      img
    `);

    if (error) {
      console.error("Error fetching posts:", error.message);
    } else {
      setPosts(data);
    }
  };

  return (
    <>
      <div className="p-4">
        <div className="max-w-4xl mx-auto my-4">
          <HomeSlider posts={posts} />
          <h2 className="text-4xl font-bold underline text-center my-7">บทความ</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 mt-4">
            {posts.map((post, i) => (
              <PostCard
                key={i}
                img={post.img} // ใช้ URL ที่ได้จาก Supabase
                title={post.title}
                discreption={post.excerpt}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
