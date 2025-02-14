document.addEventListener('DOMContentLoaded', () => {
    const blogs = [
        { title: "First Meeting of Em Tech", link: "./blogs/blog1.html" },
        { title: "Learning about Electrical Circuits", link: "./blogs/blog2.html" },
        { title: "INTRAMS", link: "./blogs/blog3.html" },
        { title: "Proposing a Robot", link: "./blogs/blog4.html" },
        { title: "Last Meeting of EmTech", link: "./blogs/blog5.html" }
    ];

    const blogList = document.getElementById('blog-links');

    // Clear any existing list items to avoid duplication
    blogList.innerHTML = '';

    // Populate the blog links
    blogs.forEach(blog => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = blog.link;
        a.textContent = blog.title;
        a.target = "_blank";
        li.appendChild(a);
        blogList.appendChild(li);
    });
});
