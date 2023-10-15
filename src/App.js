import React from 'react';
import './App.css';
import Header from './components/Header';
import LexPost from './components/LexPost';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <LexPost title="Box 1" description="This is the first white box." />
        <LexPost title="Box 2" description="This is the second white box." />
        <LexPost title="Box 3" description="This is the third white box." />
      </div>
    </div>
  );
}

export default App;