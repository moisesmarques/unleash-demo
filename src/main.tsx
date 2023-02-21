import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { FlagProvider } from '@unleash/proxy-client-react';

const config = {
  url: 'http://54.237.207.16:4242/api/frontend', // Your front-end API URL or the Unleash proxy's URL (https://<proxy-url>/proxy)
  clientKey: '*:development.2f74409848b2b83e7ece0209b1438554e5f0fd1a4bf29fd67a9b8a49', // A client-side API token OR one of your proxy's designated client keys (previously known as proxy secrets)
  refreshInterval: 15, // How often (in seconds) the client should poll the proxy for updates
  appName: 'vite-project', // The name of your application. It's only used for identifying your application
};

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <FlagProvider config={config}>
      <App />
    </FlagProvider>
  </React.StrictMode>,
)
