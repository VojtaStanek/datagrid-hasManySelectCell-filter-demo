import { SchemaDefinition as def } from '@contember/schema-definition'

export class Article {
  title = def.stringColumn().notNull()
  tags = def.manyHasMany(Tag, 'articles')
}

export class Tag {
  name = def.stringColumn().notNull()
  show = def.boolColumn().notNull().default(true)
  articles = def.manyHasManyInverse(Article, 'tags')
}

