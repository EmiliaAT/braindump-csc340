# BrainDump Requirements Testing

## Actors
1. Reader
2. Author

### Actor: Reader

#### 1 Browse Articles

1. Guest (Unsigned in reader) G1 views public articles P1 ,P2 ,P3... on main page and searches by filters and sorting.

#### 2  Sign Up

1. Reader R1 can sign up to create their profile with their unique username, unique email, and password.

#### 3 Log In

1. R1 Logs in and is brought to home page.

#### 4 Update Profile

1. R1 logs in and changes profile details.

#### 5 Create Comments

1. R1 logs in and views article. 
2. After reading article writes a comment. 

#### 6 Edit Comments

1. R1 returns to article, updates the comment. 
2. R1 regrets comment and proceeds to delete comment.

#### 7  Create Subscriptions

1. R1 will be able to subscribe to an author A1.
2. R1 views multiple subscriptions to A1, A2, A3.

#### 8 Remove Subscriptions

1. R1 decides to no longer subscribe to A3.
2. R1 removes subscription to A3 and returns to subscription list.

#### 9 Manage Collections

1. R1 views article and saves article into a collection.
2. R1 views an article from a collection and returns to collection to remove it.



### Actor: Author

Author inherits the same use cases as the Reader actor

#### 1 Sign Up

1. Author A1 signs up in the same way that R1 signed up.

#### 2 Create Article

1. A1 creates article providing the content.

#### 3 Organize Articles

1. A1 adds tags to their article allowing it to be found in searches.
