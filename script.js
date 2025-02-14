// Dynamically add blog links
const blogLinks = document.getElementById("blog-links");
const blogs = [
  { title: "Blog Post #1", link: "blogs/blog1.html" },
  { title: "Blog Post #2", link: "blogs/blog2.html" },
  { title: "Blog Post #3", link: "blogs/blog3.html" }
  { title: "Blog Post #4", link: "blogs/blog4.html" }
  { title: "Blog Post #5", link: "blogs/blog5.html" }
];

// Populate blog list dynamically
function populateBlogList() {
  blogLinks.innerHTML = ""; // Clear the list first
  blogs.forEach((blog, index) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = blog.link;
    a.textContent = `${index + 1}. ${blog.title}`;
    a.target = "_blank"; // Open links in a new tab
    li.appendChild(a);
    blogLinks.appendChild(li);
  });
}

// Initial population of the blog list
populateBlogList();

// Add functionality for "Create New Blog" button
document.getElementById("new-blog-btn").addEventListener("click", () => {
  const newTitle = prompt("Enter the title of your new blog:");
  const newLink = prompt("Enter the link to your new blog:");

  if (newTitle && newLink) {
    blogs.push({ title: newTitle, link: newLink });
    populateBlogList();
    alert("New blog added successfully!");
  } else {
    alert("Blog creation canceled. Please provide both title and link.");
  }
});
