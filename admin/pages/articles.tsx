import { CheckboxField, MultiEditPage, MultiSelectField, TextField } from "@contember/admin";
import * as React from "react";

export default () => (
	<MultiEditPage entities="Article">
		<TextField field="title" label="Title" />
		<MultiSelectField field="tags" label="Tags" options="Tag.name" />
	</MultiEditPage>
)