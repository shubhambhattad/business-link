// schemas/homeBanner.js

export default {
  name: 'homeBanner',
  title: 'Home Banner',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'bannerImage',
      title: 'Banner Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    // Add other fields as needed
  ],
}
