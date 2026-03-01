export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Product Name',
            type: 'string',
            validation: Rule => Rule.required()
        },
        {
            name: 'brand',
            title: 'Brand',
            type: 'string',
        },
        {
            name: 'category',
            title: 'Category',
            type: 'reference',
            to: [{ type: 'category' }],
            validation: Rule => Rule.required()
        },
        {
            name: 'image',
            title: 'Product Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
        {
            name: 'specifications',
            title: 'Specifications',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'Add technical specs (e.g., 4K, 8Gb RAM, etc.)'
        }
    ],
}
