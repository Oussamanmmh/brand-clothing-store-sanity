export default   {
    name : "product",
    title : "Product",
    type : "document",
    fields : [
        {
            name : "name",
            title : "Name",
            type : "string"
        },
        {
            name:'shoe_size',
            title:'Shoe Size',
            type:'array',
            of:[{type:'number'}],
            options:{
                layout:'tags'
            }
        },
        {
            name:'top_product',
            title:'Top Product',
            type:'boolean'
        },
        {
            name:'type_product',
            title:'Type Product',
            type:'reference',
            to:[{type:'type-product'}]
        },
        
        
        {
            name: 'sizes',
            title: 'Available Sizes',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
              list: [
                { title: 'XS', value: 'XS' },
                { title: 'S', value: 'S' },
                { title: 'M', value: 'M' },
                { title: 'L', value: 'L' },
                { title: 'XL', value: 'XL' },
                { title: 'XXL', value: 'XXL' },
              ],
            },
          },
          {
            name: 'colors',
            title: 'Available Colors',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
              list: [
                { title: 'Red', value: 'red' },
                { title: 'Blue', value: 'blue' },
                { title: 'Green', value: 'green' },
                { title: 'Yellow', value: 'yellow' },
                { title: 'Black', value: 'black' },
                { title: 'White', value: 'white' },
                { title: 'Gray', value: 'gray' },
                { title: 'Purple', value: 'purple' },
                { title: 'Orange', value: 'orange' },
                { title: 'Pink', value: 'pink' },
                { title: 'Brown', value: 'brown' },
                
              ],
            },
          },
        {
            name: "brand",
            title: "Brand",
            type: "reference",
            to: [{ type: "brand" }],
        },
        {
            name: "category",
            title: "Category",
            type: "reference",
            to: [{ type: "category" }],
        },
    
        {
            name : "price",
            title : "Price",
            type : "number"

        },

        {
            name : "description",
            title : "Description",
            type : "text"
        },
        {
            name: "image",
            title : "Image",
            type : "array",
            of : [
                {
                    type : "image"
                }
            ]
        },
        {
            name : "slug",
            title : "Slug",
            type : "slug",
            options : {
                source : "name",
                maxLength : 96
            }
        },
    ]

}