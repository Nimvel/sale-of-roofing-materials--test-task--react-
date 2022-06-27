import './App.css';
import { HeaderContainer } from './components/Header/HeaderContainer';
import Contacts from './components/Contacts/Contacts';
import { ContentContainer } from './components/Content/ContentContainer';

function App() {
    return (
        <div className="app">
            <div className="menu">
                <HeaderContainer />
                <Contacts />
                <ContentContainer />
            </div>
        </div>
    );
}

export default App;
