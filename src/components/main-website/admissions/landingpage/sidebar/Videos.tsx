// 
import { useState } from "react";

const Videos: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const [currentVideo, setCurrentVideo] = useState<string | null>(null);

  const videos = [
    { 
      url: "https://www.youtube.com/embed/cgJAwWfWW2g?si=PaqGlM9AN4APzSek", 
      thumbnail: "https://img.youtube.com/vi/cgJAwWfWW2g/0.jpg" 
    },
    { 
      url: "https://www.youtube.com/embed/pvcrDGzVS28?si=ICIUWropT4GxdFW9", 
      thumbnail: "https://img.youtube.com/vi/pvcrDGzVS28/0.jpg" 
    },
    { 
      url: "https://www.youtube.com/embed/u9n4T7OcRjA?si=-VLrEUhJbfHtzUhy", 
      thumbnail: "https://img.youtube.com/vi/u9n4T7OcRjA/0.jpg" 
    },
    { 
      url: "https://www.youtube.com/embed/4ayOAtUHwZM?si=01eL-Lpn8wmaYACW", 
      thumbnail: "https://img.youtube.com/vi/4ayOAtUHwZM/0.jpg" 
    },
    { 
      url: "https://www.youtube.com/embed/Ako9mZC7uJE?si=gE6TORKwq7eFPFMh", 
      thumbnail: "https://img.youtube.com/vi/Ako9mZC7uJE/0.jpg" 
    }
  ];

  const visibleVideos = showAll ? videos : videos.slice(0, 3);

  return (
    <div className="bg-gray-100 p-6 mt-2 rounded-lg">
      <h1 className="text-3xl font-semibold text-gray-800">YouTube Videos</h1>
      <div className="grid gap-5 mt-3">
        {visibleVideos.map((video, index) => (
          <div key={index} className="h-[30vh]">
            {/* If iframe is clicked, show video */}
            {!currentVideo ? (
              <img
                src={video.thumbnail}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full rounded-lg shadow-lg cursor-pointer"
                onClick={() => setCurrentVideo(video.url)}
              />
            ) : (
              <iframe
                src={currentVideo}
                title={`${index + 1}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                className="w-full h-full rounded-lg shadow-lg"
                allowFullScreen
              ></iframe>
            )}
          </div>
        ))}
      </div>
      <div className="text-center mt-4">
        <button
          className="bg-white text-primaryBtn border-2 border-primaryBtn px-4 py-1 rounded shadow hover:bg-primaryBtn hover:text-white"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "View Less" : "View More"}
        </button>
      </div>
    </div>
  );
};

export default Videos;
