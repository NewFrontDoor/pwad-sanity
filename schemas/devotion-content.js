import React from "react";
import MenuReference from "../menu-refs";
// import client from "part:@sanity/base/client";
// import groq from "groq";

// const isUniqueDate = (date, context) => {
// 	const { document } = context;
// 	const id = document._id.replace(/^drafts\./, "");
// 	const params = {
// 		draft: `drafts.${id}`,
// 		published: id,
// 		date
// 	};

// 	const query = groq`!defined(*[
//     _type == 'devotionContent' &&
//     !(_id in ['${params.draft}', '${params.published}']) &&
//     date == '${date}'
//   ][0]._id)`;

// 	return client.fetch(query);
// };

export default {
	name: "devotionContent",
	title: "Devotion",
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
		},
		{
			name: "date",
			title: "Devotion Date",
			type: "date",
			validation: (Rule) => Rule.required()
			// validation: (Rule) =>
			// 	Rule.custom(async (value, context) => {
			// 		const isUnique = await isUniqueDate(value, context);
			// 		if (!isUnique) return "Devotion date is not unique";
			// 		return true;
			// 	})
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
			date: "date",
			id: "_id"
		},
		prepare(selection) {
			const { id } = selection;
			const title = `${selection.title}`;
			return {
				title,
				media: <MenuReference id={id} />
			};
		}
	}
};
