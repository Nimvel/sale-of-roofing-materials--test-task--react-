import './App.css';
import Header from './components/Header/Header';
import Contacts from './components/Contacts/Contacts';
import { ContentContainer } from './components/Content/ContentContainer';

function App() {
    return (
        <div className="app">
            <div className="menu">
                <Header />
                <Contacts />
                <ContentContainer />
            </div>
        </div>
    );
}

export default App;
