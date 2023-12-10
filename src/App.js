import './App.css';
import Header from "./components/templates/Header/Header";
import Footer from "./components/templates/Footer/Footer";
import Main from "./components/templates/Main/Main";

function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <Main/>
            <Footer/>
        </div>
    );
}

export default App;
