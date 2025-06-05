# BrainDump API

## Description

API for the BrainDump Platform.

### Version

0.0.1

## Installation

## Notes

## API Endpoints

**Base URL:** [`http://localhost:8080`](http://localhost:8080)

## Article

1. ### [`/articles/{articleId}`](http://localhost:8080/articles/{articleId}) (GET)

Gets an individual Article in the system. Each Article record is identified by a numeric `articleId`.

#### Response

```

```

3. ### [`/articles/{articleId}`](http://localhost:8080/articles/{articleID}) (DELETE)

Deletes an existing Article from the system given an Article ID.

#### Parameters

#### Response 

```

```

4. ### [`/articles`](http://localhost:8080/articles) (POST)

Creates a new Article record in the system.

#### Parameters

#### Response

```

```

6. ### [`/articles/{articleId}`](http://localhost:8080/articles/{articleId}) (PUT)

Updates an existing Article record in the system.

#### Parameters

#### Response 

```

```

7. ### [`/articles`](http://localhost:8080/articles) (GET)

Gets a list of the latest versions of public Articles.

#### Parameters


#### Response 

```

```

8. ### [`/articles?author={userId}`](http://localhost:8080/articles?author={userId}) (GET)

Gets a list public Articles published by a given User.

#### Parameters

#### Response

```

```

8. ### [`/articles?author={userId}&all=true`](http://localhost:8080/articles?author={userId}) (GET)

Gets a list of public and private Articles published by a given User.

This endpoint should be refined for authentication later.

#### Request Body

#### Response 

```

```

10. ### [`/articles/{articleId}?collection={collectionId}`](http://localhost:8080/articles?collection={collectionId}) (GET)

Gets all public Collections that a given Article is in.

#### Request Body

#### Response

```

```

11. ### [`/Article/Topic/{topicId}`](http://localhost:8080/BrainDump/Article/Topic/{topicId})(GET)
Get articles associated to a given topic

#### Parameters


#### Response 
```

```

12. ### [`/Article/Tags/[Request Body Tag List]`]((http://localhost:8080/BrainDump/Article/Tags/[RequestBodyTagList])(POST)
Get articles based on Tag attribute

#### Parameters

#### Response 

## Comment

13. ### [`/comment/{articleId}`](http://localhost:8080/comment/{articleId}) (POST)
Adds a Comment to an article

#### Response

 ```

```
14. ### [`/comment/{commentId}`](http://localhost:8080/comment/{commentId}) (DELETE)
Replaces the text of a comment to indicate deletion

#### Response

 ```

```
15. ### [`/comment/{commentId}`](http://localhost:8080/comment/{commentId}) (PUT)
Apply edits to a comment

#### Response

 ```

```
16. ### [`/comment/{commentId}`](http://localhost:8080/comment/{commentId}) (GET)
retreive an individual comment entry

#### Response

 ```

```

## User

17. ### [`/User/Add`](http://localhost:8080/BrainDump/User/Add) (POST)
Adds a User

#### Response

 ```

```
18. ### [`/User/Update/{userId}`](http://localhost:8080/BrainDump/User/Update/{userId}) (PUT)
Updates a User Profile

#### Response

 ```

```
19. ### [`/User/{userId}`](http://localhost:8080/BrainDump/User/{userId}) (GET)
Gets User Profile

#### Response

 ```

```
20. ### [`/User/Name/{userName}`](http://localhost:8080/BrainDump/User/Name/{userName}) (GET)
Gets User Profile by Username

#### Response

 ```

```

## Subscription

21. ### [`/subscription?user={userID}&author={authorId}`](http://localhost:8080/subscription?user={userID}&author={authorId}) (POST)
Create subscription by User to an Author

#### Response

 ```

```
22. ### [`/subscription/{userId}`](http://localhost:8080/subscription/{userId}) (GET)
Gets User's list of subscribed Authors

#### Response

 ```

```
23. ### [`/subscription/articles/{userId}`](http://localhost:8080/subscription/articles/{userId}) (GET)
Gets articles from subscribed Authors

#### Response

 ```

```
24. ### [`/subscription?user={userID}&author={authorId}`](http://localhost:8080/subscription?user={userID}&author={authorId}) (DELETE)
Delete subscription by User to an Author

#### Response

 ```

```

## Collection

25. ### [`/Collection/{authorUserId}`](http://localhost:8080/BrainDump/Collection/{authorUserId}) (POST)
View collections made by User

#### Response

 ```

```
26. ### [`/Collection/Add`](http://localhost:8080/BrainDump/Collection/Add) (POST)
Create Collection

#### Response

 ```

```
27. ### [`/Collection/Delete/{collectionId}`](http://localhost:8080/BrainDump/Collection/Delete/{collectionId}) (DELETE)
Delete Collection

#### Response

 ```

```
28. ### [`/Collection/Update/{collectionId}`](http://localhost:8080/BrainDump/Collection/Update/{collectionId}) (PUT)
Update Collection name

#### Response

 ```

```
29. ### [`/Collection/Attach?article={articleID}&collection={collectionId}`](http://localhost:8080/BrainDump/Collection/Attach?article={articleID}&collection={collectionId}) (POST)
Attach an article to collection

#### Response

 ```

```
30. ### [`/Collection/Detach?article={articleID}&collection={collectionId}`](http://localhost:8080/BrainDump/Collection/Detach?article={articleID}&collection={collectionId}) (DELETE)
Detach an article from a collection

#### Response

 ```

```