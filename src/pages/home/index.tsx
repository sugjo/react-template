import { Button } from "@mantine/core";
import { Link } from "react-router-dom";

import { Icon } from "@/shared/ui";

import styles from "./index.module.css";

export const HomePage = () => {
	return (
		<main className={styles.home}>
			<h1>Welcome to Sugjo's React Template</h1>
			<p>Visit <a href="https://github.com/sugjo/react-template/blob/master/README.md">README</a> to find out the features</p>
			<Button component={Link} to="/test" rightIcon={<Icon name="arrow-insert" />}>Router Test</Button>
		</main>
	);
};
