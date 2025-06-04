# BrainDump API
## Description
API for BrainDump

### Version
0.0.1

## Installation

## Notes

## API Endpoints
Base URL: [`http://localhost:8080/BrainDump`](http://localhost:8080/BrainDump)

## Article

1. ### [`/Article/{articleId}`](http://localhost:8080/BrainDump/Article/{articleId}) (GET)
Gets an individual version of an Article in the system. Each Article version is identified by a numeric `articleId`

#### Response

 ```

```
2. ### [`/Article/Versions/{articleId}`](http://localhost:8080/BrainDump/Article/Versions/{articleId}) (GET)
returns a list of all versions associated to the article Id provided no matter which version the id corresponds to

#### Response

 ```

```
3. ### [`/Article/Delete/{articleId}`](http://localhost:8080/BrainDump/Article/Delete/{articleID}) (DELETE)
Delete an Article

#### Parameters

#### Response 

```

```

4. ### [`/Article/AddNew`](http://localhost:8080/BrainDump/Article/AddNew) (POST)
Create a new Article entry. article is assigned version 1

#### Parameters


#### Response

```

```
5. ### [`/Article/AddVersion/{articleId}`](http://localhost:8080/BrainDump/Article/AddVersion/{articleId}) (POST)
Create a new version for an existing article. article is assigned the next version number.

#### Parameters


#### Response

```

```
6. ### [`/Article/Update/{articleId}`](http://localhost:8080/BrainDump/Article/Update/{articleId}) (PUT)
Update an existing version of an Article. 

#### Parameters

#### Response 

```

```
7. ### [`/Article/Public`](http://localhost:8080/BrainDump/Article/Public) (GET)
Gets a list of the latest versions of public Articles.

#### Parameters


#### Response 

```

```

8. ### [`/Article/Published/{userId}`](http://localhost:8080/BrainDump/Article/Published/{userId}) (GET)
Gets a list published articles for a given user

#### Parameters

#### Response

```

```
9. ### [`/Article/All/{userId}`]((http://localhost:8080/BrainDump/Article/All/{userId}')(GET)
Gets a list of published and unpublished articles by user

#### Request Body

#### Response 

```

```
10. ### [`/Article/Collection/{collectionId}`]((http://localhost:8080/BrainDump/Article/Collection/{collectionId})(GET)
Gets Articles in a specified collection

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

13. ### [`/Comment/Add/{articleId}`](http://localhost:8080/BrainDump/Comment/Add/{articleId}) (POST)
Adds a Comment to an article

#### Response

 ```

```
14. ### [`/Comment/Reply/{commentId}`](http://localhost:8080/BrainDump/Comment/Reply/{commentId}) (POST)
Adds a Comment in reply to an existing Comment

#### Response

 ```

```
15. ### [`/Comment/Delete/{commentId}`](http://localhost:8080/BrainDump/Comment/Delete/{commentId}) (DELETE)
Replaces the text of a comment to indicate deletion

#### Response

 ```

```
16. ### [`/Comment/Update/{commentId}`](http://localhost:8080/BrainDump/Comment/Update/{commentId}) (PUT)
Apply edits to a comment

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

21. ### [`/Subscription/Add?user={userID}&author={authorId}`](http://localhost:8080/BrainDump/Subscription/Add?user={userID}&author={authorId}) (POST)
Create subscription by User to an Author

#### Response

 ```

```
22. ### [`/Subscription/{userId}`](http://localhost:8080/BrainDump/Subscription/{userId}) (GET)
Gets User's list of subscribed Authors

#### Response

 ```

```
23. ### [`/Subscription/Articles/{userId}`](http://localhost:8080/BrainDump/Subscription/Articles/{userId}) (GET)
Gets articles from subscribed Authors

#### Response

 ```

```
24. ### [`/Subscription/Delete?user={userID}&author={authorId}`](http://localhost:8080/BrainDump/Subscription/Delete?user={userID}&author={authorId}) (POST)
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