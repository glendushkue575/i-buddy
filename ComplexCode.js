/*
Filename: ComplexCode.js

Description: This code demonstrates a complex implementation of a social media application. It includes functionalities such as user registration, login, posting, commenting, likes, and follows. It uses various data structures and algorithms to handle data manipulation and user interactions.

Disclaimer: This code is for demonstration purposes only and may not handle all edge cases or follow best practices.

Please note that this code is a simplified version and does not include actual server communication or database integration. It is meant to simulate the behavior of a social media application but does not implement the full functionality of a real-world application.

*/

// User class representing a single user in the social media app
class User {
  constructor(id, name, email, password) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.posts = [];
    this.following = new Set();
  }

  createPost(content) {
    const postId = generateUniqueId();
    const post = new Post(postId, content, this);
    this.posts.push(post);
    return post;
  }

  deletePost(postId) {
    const index = this.posts.findIndex(post => post.id === postId);
    if (index !== -1) {
      this.posts.splice(index, 1);
      return true;
    }
    return false;
  }

  likePost(postId) {
    const post = this.getPostById(postId);
    if (post) {
      post.likes.add(this.id);
      return true;
    }
    return false;
  }

  commentPost(postId, content) {
    const post = this.getPostById(postId);
    if (post) {
      const commentId = generateUniqueId();
      const comment = new Comment(commentId, content, this);
      post.comments.push(comment);
      return comment;
    }
    return false;
  }

  followUser(user) {
    user.addFollower(this);
    this.following.add(user);
  }

  addFollower(user) {
    // Simulate a notification or other action when a user is followed
    console.log(`${this.name} has a new follower: ${user.name}`);
  }

  getPostById(postId) {
    for (const post of this.posts) {
      if (post.id === postId) {
        return post;
      }
    }
    return null;
  }
}

// Post class representing a single post in the social media app
class Post {
  constructor(id, content, user) {
    this.id = id;
    this.content = content;
    this.user = user;
    this.likes = new Set();
    this.comments = [];
  }
}

// Comment class representing a single comment on a post
class Comment {
  constructor(id, content, user) {
    this.id = id;
    this.content = content;
    this.user = user;
  }
}

// Utility function to generate unique IDs
function generateUniqueId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
}

// Simulation of user registration, login, and interaction
const user1 = new User(1, "John Doe", "john@example.com", "password123");
const user2 = new User(2, "Jane Smith", "jane@example.com", "password456");

// User 1 creates and likes posts
const post1 = user1.createPost("Hello World!");
const post2 = user1.createPost("This is my first post.");
user1.likePost(post1.id);
user1.likePost(post2.id);

// User 2 follows User 1 and comments on their post
user2.followUser(user1);
user2.commentPost(post1.id, "Nice post!");

// Output the posts and their interactions
console.log(`User 1 Posts: ${user1.posts.length}`);
console.log(`User 2 Posts: ${user2.posts.length}`);

console.log(`User 1 Post 1 Likes: ${post1.likes.size}`);
console.log(`User 1 Post 2 Likes: ${post2.likes.size}`);

console.log(`User 2 Post 1 Comments: ${post1.comments.length}`);

console.log(`User 1 Following: ${[...user1.following].map(user => user.name)}`);
console.log(`User 2 Following: ${[...user2.following].map(user => user.name)}`);