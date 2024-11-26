const posts = [
  { id: 1, title: "First Post", content: "This is My First Post!" },
  { id: 2, title: "Second Post", content: "Hello! Second Post is Here." },
];

//Listing Post
function listPosts() {
  console.log("Available Posts:");
  posts.forEach((post) => {
    console.log(`- ${post.title}: ${post.content}`);
  });
}

//Adding Post
function addPost(newPost) {
  return new Promise((resolve, reject) => {
    if (newPost && newPost.title && newPost.content) {
      posts.push(newPost);
      resolve("New Post Added Succesfully.");
    } else {
      reject(
        "An error occurred while adding a new post. Please enter valid post information."
      );
    }
  });
}

async function listing() {
  try {
    //listing posts
    listPosts();

    //Adding posts
    const newPost = {
      id: 3,
      title: "3. Post",
      content: "Post added with Async/Await!",
    };
    console.log("\nNew Post Adding...");
    const message = await addPost(newPost);
    console.log(message);

    //listing post with new post
    console.log("\nUpdated Posts:");
    listPosts();
  } catch (error) {
    console.error("Error:", error);
  }
}

listing();
