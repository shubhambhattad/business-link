// schemas/siteSettings.js

export default {
  name: 'siteSettings',
  title: 'Your Links',
  type: 'document',
  fields: [
    {
      name: 'logo',
      title: 'Logo URL',
      type: 'url',
    },
    {
      name: 'userName',
      title: 'User Name',
      type: 'string',
    },
    {
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'url',
              title: 'URL',
              type: 'url',
            },
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
            // {
            //   name: 'description',
            //   title: 'Description',
            //   type: 'text',
            //   description: 'A brief description of the link.',
            // },
          ],
        },
      ],
    },
  ],
}
