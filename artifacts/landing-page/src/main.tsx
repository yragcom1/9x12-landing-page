import { createRoot } from 'react-dom/client';
import { setBaseUrl } from '@workspace/api-client-react';

import App from './App';
import { ErrorBoundary } from '@/components/error-boundary';

import './index.css';

// In production builds (e.g. static export hosted on Hostinger), point API
// calls at the live Replit backend with an absolute URL. In dev, keep
// relative paths so the local proxy handles them.
if (import.meta.env.PROD) {
  setBaseUrl(
    import.meta.env.VITE_API_BASE_URL ??
      'https://landing-page-builder-yragcom1.replit.app',
  );
}

createRoot(document.getElementById('root')!, {
  // Keeps caught errors off reportError(), which would raise the dev overlay.
  onCaughtError: (error, errorInfo) => {
    console.error(error, errorInfo.componentStack);
  },
}).render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>,
);
