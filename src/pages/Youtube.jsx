import React, { useEffect, useState } from "react";
import { ThumbsUp, Share2 } from "lucide-react";
//import "./index.css"; // ✅ Import styles

const YouTubeoutube = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch("https://jsonplaceholder.typicode.com/posts");
          if (!response.ok) {
            throw new Error("API response failed!");
          }
          const data = await response.json();
          
          console.log("Fetched Data:", data); // ✅ Debug API data

          const videosData = data.slice(0, 100).map((item, index) => ({
            id: item.id,
            title: item.title,
            description: item.body,
            thumbnail: `https://picsum.photos/400/225?random=${index}`, // ✅ Fixed Thumbnail
            likes: 0 // ✅ Initial Likes
          }));

          setVideos(videosData);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      fetchData();
    }, []);

    const handleLike = (id) => {
        setVideos(videos.map(video =>
          video.id === id ? { ...video, likes: video.likes + 1 } : video
        ));
    };

    const handleShare = (title) => {
        alert(`Shared: ${title}`);
    };

    if (videos.length === 0) return <p>Loading...</p>;

    return (
      <div className="gallery">
        {videos.map((video) => (
          <div key={video.id} className="video-card">
            <img 
              src={video.thumbnail || "https://via.placeholder.com/400x225"} 
              alt="Video Thumbnail" 
              className="thumbnail" 
            />
            <div className="info">
              <h3 className="title">{video.title}</h3>
              <p className="description">{video.description.substring(0, 80)}...</p>
              <div className="buttons">
                  <button className="like-btn" onClick={() => handleLike(video.id)}>
                    <ThumbsUp size={16} /> {video.likes} Like
                  </button>
                  <button className="share-btn" onClick={() => handleShare(video.title)}>
                    <Share2 size={16} /> Share
                  </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
};

export default YouTubeoutube;
