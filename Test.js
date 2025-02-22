import { MediaStreamLibrary } from 'media-stream-library';

const stream = new MediaStreamLibrary({
  url: 'rtsp://146.186.159.50/axis-cgi/mjpg/video.cgi', // Replace with your camera's RTSP stream URL
});

stream.play();  // Start streaming
