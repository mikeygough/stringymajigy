import './App.css';
import { React } from 'react';
import Stringlib from './components/Stringlib/Stringlib';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Stringlib />
      <Footer />
    </div>
  );
}

export default App;
