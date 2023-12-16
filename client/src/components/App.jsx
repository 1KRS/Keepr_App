import Header from './Header';
import Note from './Note';
import Footer from './Footer';
import notes from '../notes';

// console.log(notes);


const App = () => {
  return (
    <html>
      <Header />
      {notes.map(({ key, title, content }) => (
        <Note key={key} title={title} content={content} />
      ))}
      <Footer />
    </html>
  );
};
export default App;
