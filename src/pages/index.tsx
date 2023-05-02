import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider
} from "react-router-dom";

import { HomePage } from "./home";
import { TestPage } from "./test";

export const Router = () => {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route>
				<Route index element={<HomePage />} />
				<Route path="test" element={<TestPage />} />
			</Route>
		)
	);

	return <RouterProvider router={router} />;
};
