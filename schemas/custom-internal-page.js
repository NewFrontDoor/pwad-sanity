export default {
	name: "customInternalPage",
	title: "Custom Internal Page",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string"
		},
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			options: {
				source: "title",
				maxLength: 200, // Will be ignored if slugify is set
				slugify: (input) =>
					input
						.toLowerCase()
						.replace(/\s+/g, "-")
						.slice(0, 200)
			}
		}
	]
};
