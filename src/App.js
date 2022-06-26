import './App.css';
import Contacts from './components/Contacts/Contacts';
import Content from './components/Content/Content';
import Header from './components/Header/Header';

function App() {
    return (
        <div className="app">
            <div className="menu">
                <Header />
                <Contacts />
                <Content />
            </div>
        </div>
    );
}

export default App;
