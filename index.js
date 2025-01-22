import ReactDOM from 'react-dom/client';
import { AuthContextProvider } from './components/UI/Context';

import './index.css';
import Apps from './Apps';
import '../node_modules/react-bootstrap/dist/react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <AuthContextProvider> 
    <Apps />
</AuthContextProvider>  
);

 