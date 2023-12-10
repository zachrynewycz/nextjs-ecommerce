export default {
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
    },
    {
      name: 'rating',
      type: 'number',
      title: 'Rating',
      validation: (Rule: any) => Rule.min(0).max(5),
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price',
    },
    {
      name: 'price_id',
      type: 'string',
      title: 'Stripe Price ID',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Product Slug',
      options: {
        source: 'name',
      },
    },
    {
      name: 'size',
      type: 'array',
      title: 'Size',
      of: [{type: 'string'}],
      options: {
        list: [
          {value: 'XS', title: 'Extra Small'},
          {value: 'S', title: 'Small'},
          {value: 'M', title: 'Medium'},
          {value: 'L', title: 'Large'},
          {value: 'XL', title: 'Extra Large'},
        ],
      },
    },
    {
      name: 'images',
      type: 'array',
      title: 'Product Images',
      of: [{type: 'image'}],
    },
    {
      name: 'category',
      type: 'reference',
      title: 'Category Type',
      to: [{type: 'category'}],
    },
  ],
}
