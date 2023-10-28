import React from "react";
import S from "@sanity/desk-tool/structure-builder";
import {
	MdHome,
	MdPeople,
	MdDescription,
	MdStyle,
	MdWidgets,
	MdMusicNote,
	MdLibraryBooks,
	MdAttachFile,
	MdLink,
	MdQueueMusic,
	MdLock
} from "react-icons/md";
import { FiBookOpen } from "react-icons/fi";
import { FaPrayingHands, FaBible } from "react-icons/fa";

export default () => {
	return S.list()
		.title("PWAD admin")
		.items([
			S.listItem()
				.title("Home and Menu")
				.icon(MdHome)
				.child(
					S.editor()
						.title("Home and Menu")
						.id("global-main")
						.schemaType("main")
						.documentId("global-main")
				),
			S.listItem()
				.title("Pages")
				.icon(MdDescription)
				.child(S.documentTypeList("pageContent").title("Page content")),
			S.listItem()
				.title("Restricted Pages")
				.icon(MdLock)
				.child(S.documentTypeList("restrictedContent").title("Restricted content")),
			S.listItem()
				.title("Resources")
				.icon(MdQueueMusic)
				.child(
					S.list()
						.title("Resources")
						.items([
							S.listItem()
								.title("Hymns")
								.icon(MdMusicNote)
								.child(
									S.documentTypeList("hymn")
										.title("Hymns")
										.child((id) =>
											S.document()
												.schemaType("hymn")
												.documentId(id)
												.views([
													// The default form for editing a document
													S.view.form(),
													// Preview using pwad.org.au components
													S.view
														.component(({ document }) => <div>Here is the document {document.title}</div>)
														.title("Preview"),
													// Render the current selected document’s values as JSON
													S.view
														.component(({ document }) => <pre>{JSON.stringify(document.displayed, null, 2)}</pre>)
														.title("View JSON")
												])
										)
								),
							S.listItem()
								.title("Prayers")
								.icon(FaPrayingHands)
								.child(S.documentTypeList("prayer").title("Prayers")),
							S.listItem()
								.icon(MdStyle)
								.title("Liturgies")
								.child(S.documentTypeList("liturgy").title("Liturgies")),
							S.listItem()
								.title("Scriptures")
								.icon(FiBookOpen)
								.child(S.documentTypeList("scripture").title("Scriptures")),
							S.listItem()
								.title("Files")
								.icon(MdAttachFile)
								.child(S.documentTypeList("asset").title("Files")),
							S.listItem()
								.title("External URLs")
								.icon(MdLink)
								.child(S.documentTypeList("externalUrl").title("External URLs")),
							S.listItem()
								.title("Custom Internal Pages")
								.icon(MdLink)
								.child(S.documentTypeList("customInternalPage").title("Custom Internal Pages")),
							S.listItem()
								.title("Devotions")
								.icon(FaBible)
								.child(
									S.documentTypeList("devotionContent")
										.title("Devotions")
										.defaultOrdering([
											{ field: "date", direction: "asc" },
											{ field: "title", direction: "asc" }
										])
								)
						])
				),
			S.divider(),
			S.listItem()
				.title("Other")
				.icon(MdWidgets)
				.child(
					S.list()
						.title("Other")
						.items([
							S.listItem()
								.title("Authors")
								.child(S.documentTypeList("author").title("Authors")),
							S.listItem()
								.title("Categories")
								.child(S.documentTypeList("category").title("Categories")),
							S.listItem()
								.title("Copyrights")
								.child(S.documentTypeList("copyright").title("Copyrights")),
							S.listItem()
								.title("Keywords")
								.child(S.documentTypeList("keyword").title("Keywords")),
							S.listItem()
								.title("Metres")
								.child(S.documentTypeList("metre").title("Metres")),
							S.listItem()
								.title("Occasions")
								.child(S.documentTypeList("occasion").title("Occasions")),
							S.listItem()
								.title("Tunes")
								.child(S.documentTypeList("tune").title("Tunes"))
						])
				),
			S.listItem()
				.title("Users")
				.icon(MdPeople)
				.child(S.documentTypeList("user").title("Users"))
		]);
};
