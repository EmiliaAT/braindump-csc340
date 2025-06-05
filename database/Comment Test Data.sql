INSERT INTO braindump."Comment"(
	"commentId", "commentBody", "createdTimestamp", "articleId", "replyToCommentId", "commentUserId")
	VALUES (1, 'blah blah blah', '2020-06-22 19:10:25-07', 1, NULL, 1);

INSERT INTO braindump."Comment"(
	"commentId", "commentBody", "createdTimestamp", "articleId", "replyToCommentId", "commentUserId")
	VALUES (2, 'blah blah blah 2', '2020-06-23 19:10:25-07', 2, NULL, 1);

INSERT INTO braindump."Comment"(
	"commentId", "commentBody", "createdTimestamp", "articleId", "replyToCommentId", "commentUserId")
	VALUES (3, 'blah blah blah 3', '2020-06-23 19:10:25-07', 1, 1, 2);

INSERT INTO braindump."Comment"(
	"commentId", "commentBody", "createdTimestamp", "articleId", "replyToCommentId", "commentUserId")
	VALUES (4, 'blah blah blah 4', '2020-06-24 19:10:25-07', 1, 3, 2);

INSERT INTO braindump."Comment"(
	"commentId", "commentBody", "createdTimestamp", "articleId", "replyToCommentId", "commentUserId")
	VALUES (5, 'blah blah blah 5', '2020-06-24 19:10:25-07', 3, NULL, 3);