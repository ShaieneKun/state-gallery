// import logo from './logo.svg';
import './App.css';
import FeedbackForm from './components/FeedbackForm';
import Gallery from './components/Gallery';
import NameForm from './components/NameForm';
import VerticalSpacing from './components/VerticalSpacing';
import FeedbackNameForm from './components/FeedbackNameForm';


function App() {
  return (
    <div className="App">
      <h1>Gallery</h1>
      <Gallery />
      <VerticalSpacing />

      <h1>Name form</h1>
      <NameForm />
      <VerticalSpacing />

      <h1>Feedback form</h1>
      <FeedbackForm />
      <VerticalSpacing />

      <h1>Feedback name form</h1>
      <FeedbackNameForm />

    </div>
  );
}

export default App;
