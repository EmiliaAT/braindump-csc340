# BrainDump - Software Design 

Version 1  
Prepared by Sebastian Foreman\
BrainDump\
June 3, 2025

Table of Contents
=================
* [Revision History](#revision-history)
* 1 [Product Overview](#1-product-overview)
* 2 [Use Cases](#2-use-cases)
  * 2.1 [Use Case Model](#21-use-case-model)
  * 2.2 [Use Case Descriptions](#22-use-case-descriptions)
    * 2.2.1 [Actor: Teacher](#221-actor-teacher)
    * 2.2.2 [Actor: Student](#222-actor-student) 
* 3 [Database Schema](#4-database-schema)

## Revision History
| Name | Date    | Reason For Changes  | Version   |
| ---- | ------- | ------------------- | --------- |
|  SF  | 6/3    | Initial Design      |    1      |
|      |         |                     |           |
|      |         |                     |           |

## 1. Product Overview
The BrainDump platform is designed to make writing, storing, and sharing information in the form of educational articles easy. All articles are composed of simple Markdown, and can be downloaded for offline use at any time.

The platform intentionally has features designed to make finding others' articles easier; using a tagging system, a collections/albums system, and multiple filtering and sorting options. 
All authenticated users are able to view articles, create articles publically or privately, and curate articles to their liking.

## 2. Use Cases
### 2.1 Use Case Model
![Use Case Model](https://github.com/EmiliaAT/braindump-csc340/blob/main/docs/BrainDump%20Use%20Case%20Model.png)

### 2.2 Use Case Descriptions

#### 2.2.1 Actor: Author

##### 2.2.1.0 Browse Articles
An author will be able to view public articles without signing on.
##### 2.2.1.1 Sign Up
An author can sign up to create their profile with their name, email, password, and bio. Emails must be unique.
##### 2.2.1.2 Log In
An author shall be able to sign in using their registered email and password. After logging in, the author shall be directed their dashboard where they see a list of their published articles.
##### 2.2.1.3 Update Profile
An author shall be able to modify their profile by going to their profile page. They can change their email, password, and biography.
##### 2.2.1.4 Create Article
The author shall be able to create a new article and edit existing articles. They would be able to publish a new article when they are ready to do so.
##### 2.2.1.5 Organize Articles
The author can categorize articles by topic and browse articles by topic.
##### 2.2.1.6 Manage Collections
An author shall be able to group articles into collections.


#### 2.2.2 Actor: Reader

##### 2.2.2.0 Browse Articles
A reader will be able to view public articles without signing on.
##### 2.2.2.1 Sign Up
A reader can sign up to create their profile with their name, email, password, and bio. Emails must be unique.
##### 2.2.2.2 Log In
A reader shall be able to sign in using their registered email and password. After logging in, the reader shall be able to see a list of published and public articles.
##### 2.2.2.3 Update Profile
An author shall be able to modify their profile by going to their profile page. They can change their email, password, and biography.
##### 2.2.2.4 Create Comments
A reader shall be able to add a comment to an existing article and reply to comments previously attached to the article. 
##### 2.2.2.5 Edit Comments
A reader will be able to update and erase their own comments.
##### 2.2.2.6 Create Subscriptions
A reader will be able to subscribe to an author. They subsequently will be able to see a list of published articles by that author separate from the general pool of articles. 
##### 2.2.2.7 Remove Subscriptions
Subscriptions can be deleted by the reader at any time.


## 3. Database Schema
![UML Class Diagram](https://github.com/EmiliaAT/braindump-csc340/blob/main/database/braindump_entity_relationship_diagram_v5.png)

