// External Imports
import { Routes, Route } from 'react-router-dom';

// Internal Imports
import routes from './routes';

const App = () => {
    return (
        <Routes>
            {routes.map((route, index) => (
                <Route {...route} />
            ))}
        </Routes>
    );
};

export default App;
