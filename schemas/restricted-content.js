import React from "react";
import MenuReference from "../menu-refs";

export default {
	name: "restrictedContent",
	title: "Restricted Content",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Title",
			type: "string"
		},
		{
			name: "subtitle",
			title: "Subtitle",
			description: "Leave blank if not needed and the subtitle field will be ignored",
			type: "string"
		},
		{
			name: "hasToc",
			title: "Display Table of Contents",
			description: "If checked, the page will output a Table of Contents built from the H2 headings",
			type: "boolean"
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
		},
		{
			name: "content",
			title: "Content",
			type: "content"
		}
	],
	preview: {
		select: {
			title: "title",
			id: "_id"
		},
		prepare(selection) {
			const { title, id } = selection;
			return {
				title,
				media: <MenuReference id={id} />
			};
		}
	}
};
