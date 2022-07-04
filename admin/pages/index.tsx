import * as React from 'react'
import { DataGrid, DataGridPage, Field, FieldView, GenericPage, HasManySelectCell, TextCell, TextField } from '@contember/admin'

export default () => (
	<DataGridPage entities="Article">
		<TextCell field="title" header="Title" />
		<HasManySelectCell
			header="Tags"

			field="tags[show = true]"
			
			options={{ entities: "Tag", filter: "[show = true]" }}
			renderOption={(acc) => <>➡️{acc.getField('name').value}⬅️</>}
			optionsStaticRender={<Field field="name" />}
		/>
	</DataGridPage>
)
