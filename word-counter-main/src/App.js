import React, { useState } from 'react';
import './App.css';

function App() {
  const [paragraph, setParagraph] = useState('');
  const wordCount = paragraph.split(/\s+/).filter(word => word !== '').length;

  const handleParagraphChange = (e) => {
    setParagraph(e.target.value);
  };

  return (
    <div className="App">
      <div className="word-counter">
        <h1>Responsive Paragraph Word Counter</h1>
        <textarea
          placeholder="Enter your paragraph here..."
          value={paragraph}
          onChange={handleParagraphChange}
        />
        <p>Word Count: {wordCount}</p>
      </div>
    </div>
  );
}

export default App;
