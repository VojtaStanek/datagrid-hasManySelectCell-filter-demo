import { CheckboxField, MultiEditPage, TextField } from "@contember/admin";
import * as React from "react";

export default () => (
	<MultiEditPage entities="Tag">
		<TextField field="name" label="Name" />
		<CheckboxField field="show" label="Show" />
	</MultiEditPage>
)