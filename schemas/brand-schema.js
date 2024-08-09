export default{
    name : "brand",
    title : "Brand",
    type : "document",
    fields : [
        {
            name : "name",
            title : "Name",
            type : "string"
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
            name: 'website',
            title: 'Website',
            type: 'url',
          },
    ]
}