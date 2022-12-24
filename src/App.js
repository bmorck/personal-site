import './App.css';
import './fonts/muli.light.ttf';
import AppRouter from './components/AppRouter';
import Footer from './components/Footer';
import TopAppRouter from './components/TopAppRouter';


function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-custom-bg-color">
        {/*multiple level of router -- first level to check if its a coming soon or not found page
          then we have another router to render the subpage*/}
        <TopAppRouter />
        <AppRouter />
        <Footer />
      </div>
    </>
  );
}

export default App;
