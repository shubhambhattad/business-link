import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'idcreation',

  projectId: 's0atti9j',
  dataset: 'idcre',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
