import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

/* $(document).ready( function () {

  $('#myTable').DataTable({
      pageLength : 3,
      lengthMenu: [[3, 6, 12, -1], [3, 6, 12,50]]
  });

}); */
reportWebVitals();
