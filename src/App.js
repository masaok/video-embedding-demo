import "./App.css";

function App() {
  return (
    <div className="App">
      <div>VIMEO</div>
      <iframe
        title="vimeo"
        src="https://player.vimeo.com/video/225408543?h=b826dd2175"
        width="640"
        height="338"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div>YOUTUBE</div>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/mRSswjWNjbw"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div>VIMEO (no dimensions)</div>
      <iframe
        title="vimeo"
        src="https://player.vimeo.com/video/225408543?h=b826dd2175"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div>YOUTUBE (no dimensions)</div>
      <iframe
        src="https://www.youtube.com/embed/mRSswjWNjbw"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div>VIMEO (too narrow)</div>
      <iframe
        title="vimeo"
        src="https://player.vimeo.com/video/225408543?h=b826dd2175"
        width="100"
        height="315"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div>YOUTUBE (too wide)</div>
      <iframe
        src="https://www.youtube.com/embed/mRSswjWNjbw"
        width="560"
        height="100"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div>VIMEO (too wide)</div>
      <iframe
        title="vimeo"
        src="https://player.vimeo.com/video/225408543?h=b826dd2175"
        width="315"
        height="100"
        frameborder="0"
        allow="autoplay; fullscreen; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div>YOUTUBE (too narrow)</div>
      <iframe
        src="https://www.youtube.com/embed/mRSswjWNjbw"
        width="100"
        height="560"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default App;
