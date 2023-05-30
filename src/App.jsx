import './App.css';
import ContactForm from './components/contact-form';
import Header from './components/header';
import Projects from './components/projects';
import WhoAmI from './components/who-am-i';

function App() {
  return (
    <>
      <Header />
      <WhoAmI />
      <Projects />
      <ContactForm />
    </>
  );
}

export default App;
