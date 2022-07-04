import * as React from 'react'
import { DataGrid, DataGridPage, GenericPage, HasManySelectCell, TextCell, TextField } from '@contember/admin'

export default () => (
	<DataGridPage entities="Article">
		<TextCell field="title" header="Title" />
		<HasManySelectCell field="tags[show = true]" options="Tag[show = true].name" header="Tags" />
	</DataGridPage>
)
