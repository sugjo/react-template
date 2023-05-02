import { Button } from "@mantine/core";
import { Link } from "react-router-dom";

import { Icon } from "@/shared/ui";

import styles from "./index.module.css";

export const TestPage = () => {
	return (
		<main className={styles.test}>
			<h1>Router Test Page</h1>
			<Button component={Link} to="/" leftIcon={<Icon name="arrow-back" />}>Back</Button>
		</main>
	);
};
