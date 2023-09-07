import './App.css';
import Banner from './components/banner/Banner';
import Education from './components/education/Education';
import Header from './components/header/Header';
import Profile from './components/profile/Profile';

function App() {
  return (
    <div className='App'>
      <h1> powered by Dust </h1>
      <Header />
      <Banner />
      <Profile />
      <Education />
    </div>
  );
}

export default App;
