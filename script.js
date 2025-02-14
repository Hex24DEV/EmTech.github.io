// script.js

document.addEventListener('DOMContentLoaded', () => {
    let blogs = [
        { name: '📝 First Meeting of EmTech', link: "blogs/blog1.html" },
        { name: '⚡ Learning About Electrical Circuits', link: "blogs/blog2.html" },
        { name: '🏆 Intramurals Week Blog', link: "blogs/blog3.html" },
        { name: '🤖 Proposing a Robot', link: "blogs/blog4.html" },
        { name: '🎓 Last Meeting of EmTech', link: "blogs/blog5.html" }
    ];

    const blogList = document.getElementById('blog-links');

    // Populate the blog links
    blogLinks.forEach(blog => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = blog.url;
        a.textContent = blog.name;
        li.appendChild(a);
        blogList.appendChild(li);
    });

    // Handle new blog button click
    document.getElementById('new-blog-btn').addEventListener('click', () => {
        const blogName = prompt('Enter the name of your new blog:');
        if (blogName) {
            const newBlog = document.createElement('li');
            const newLink = document.createElement('a');
            const url = blogName.toLowerCase().replace(/\s+/g, '_') + '.html';
            newLink.href = url;
            newLink.textContent = `🆕 ${blogName}`;
            newBlog.appendChild(newLink);
            blogList.appendChild(newBlog);
            alert(`New blog '${blogName}' added!`);
        }
    });
});")}]}
