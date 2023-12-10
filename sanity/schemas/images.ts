export default {
  name: 'images',
  type: 'document',
  title: 'Images',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Image Name',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
    },
  ],
}
