import "./Video.css";
import { useRef } from "react";
import { useEffect } from "react";

function Video() {
    const videoRef = useRef(null);
    useEffect(() => {
      const startVideo = () => {
        navigator.mediaDevices
          .getUserMedia({ video: true })
          .then((stream) => {
            videoRef.current.srcObject = stream;
          })
          .catch((error) => console.error("Error accessing the webcam:", error));
      };
  
      startVideo();
    }, []);
  return (
    <div className="liveVideo">
      <video ref={videoRef} autoPlay className="video" />
    </div>
  );
}

export default Video;
