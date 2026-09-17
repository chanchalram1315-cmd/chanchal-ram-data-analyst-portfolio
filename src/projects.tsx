import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import AllProjectsPage from './AllProjectsPage';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AllProjectsPage />
  </StrictMode>,
);
