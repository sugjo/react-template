import "virtual:svg-icons-register";
import "./css/index.css";

import { MantineProvider } from "@mantine/core";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import { Router } from "@/pages";

import { store } from "./store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<MantineProvider
				withGlobalStyles
				withNormalizeCSS
				withCSSVariables
				theme={{ colorScheme: "dark" }}
			>
				<Router />
			</MantineProvider>
		</Provider>
	</React.StrictMode>
);
