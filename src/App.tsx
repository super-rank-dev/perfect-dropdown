import { Provider } from "react-redux";
import Landing from "./components/Landing";

import store from "./redux";

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/stylesheets/global.css';

// APP ROOT ELEMENT
const App: React.FC = () => {
    return (
        <Provider store={store}>
            <div className="app-container">
                <div className="app-header">Perfect Dropdown</div>
                <div className="app-content">
                    <Landing />
                </div>
            </div>
        </Provider>
    );
}

export default App;