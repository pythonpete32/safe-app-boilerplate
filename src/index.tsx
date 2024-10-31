import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import SafeLoader from "./components/SafeLoader";

import App from "./App";
import "./index.css";
import ReactDOM from "react-dom/client";
import SafeProvider from "@safe-global/safe-apps-react-sdk";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { WagmiProvider } from "wagmi";
import { config } from "./lib/wagmi";

const queryClient = new QueryClient();
const root = document.getElementById("root");

// biome-ignore lint/style/noNonNullAssertion: <explanation>
ReactDOM.createRoot(root!).render(
	<React.StrictMode>
		<WagmiProvider config={config}>
			<QueryClientProvider client={queryClient}>
				<SafeProvider loader={<SafeLoader />}>
					<App />
					<ReactQueryDevtools initialIsOpen={false} />
				</SafeProvider>
			</QueryClientProvider>
		</WagmiProvider>
	</React.StrictMode>,
);
