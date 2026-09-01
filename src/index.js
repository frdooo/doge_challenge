import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Prevent unhandled wallet/extension errors from breaking the preview
if (typeof window !== 'undefined') {
	const ignorePatterns = [/MetaMask/i, /ethereum/i, /inpage/i, /chrome-extension/i, /web3/i];
	
	window.addEventListener('unhandledrejection', (event) => {
		const reasonStr = event.reason ? String(event.reason.message || event.reason) : '';
		if (ignorePatterns.some((pattern) => pattern.test(reasonStr))) {
			event.preventDefault();
			event.stopImmediatePropagation();
		}
	});

	window.addEventListener('error', (event) => {
		const msg = String(event.message || '');
		const file = String(event.filename || '');
		if (ignorePatterns.some((pattern) => pattern.test(msg) || pattern.test(file))) {
			event.preventDefault();
			event.stopImmediatePropagation();
		}
	});
}

class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false, error: null };
	}

	static getDerivedStateFromError(error) {
		return { hasError: true, error };
	}

	componentDidCatch(error, errorInfo) {
		console.warn('Caught in ErrorBoundary:', error, errorInfo);
	}

	render() {
		if (this.state.hasError) {
			return (
				<div style={{ padding: '40px', textAlign: 'center', backgroundColor: '#fdebdd', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
					<h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '12px', color: '#0d1a20' }}>Something went wrong</h2>
					<p style={{ color: '#555', marginBottom: '20px' }}>An unexpected error occurred. Please refresh the page.</p>
					<button
						onClick={() => window.location.reload()}
						style={{ padding: '10px 24px', backgroundColor: '#e95a32', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: '600' }}
					>
						Reload Application
					</button>
				</div>
			);
		}
		return this.props.children;
	}
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<ErrorBoundary>
		<App />
	</ErrorBoundary>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

