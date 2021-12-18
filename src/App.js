import "./App.css";

function App() {
  return (
    <div className="App">
      <div>VIMEO</div>
      <iframe
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
    </div>
  );
}

export default App;
