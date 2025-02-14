// script.js

document.addEventListener('DOMContentLoaded', () => {
    let blogs = [
        { title: "Blog Post #1", link: "./blogs/blog1.html" },
        { title: "Blog Post #2", link: "./blogs/blog2.html" },
        { title: "Blog Post #3", link: "./blogs/blog3.html" },
        { title: "Blog Post #4", link: "./blogs/blog4.html" },
        { title: "Blog Post #5", link: "./blogs/blog5.html" }
    ];

    const blogList = document.getElementById('blog-links');

    // Populate the blog links
    blogs.forEach(blog => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = blog.link;
        a.textContent = blog.title;
        a.target = "_blank"; // Open in a new tab
        li.appendChild(a);
        blogList.appendChild(li);
    });

    // Handle new blog button click
    document.getElementById('new-blog-btn').addEventListener('click', () => {
        const blogName = prompt('Enter the name of your new blog:');
        if (blogName) {
            const newBlog = document.createElement('li');
            const newLink = document.createElement('a');
            const url = `./blogs/${blogName.toLowerCase().replace(/\s+/g, '_')}.html`;
            newLink.href = url;
            newLink.textContent = `🆕 ${blogName}`;
            newLink.target = "_blank";
            newBlog.appendChild(newLink);
            blogList.appendChild(newBlog);
            alert(`New blog '${blogName}' added!`);
        }
    });
});
