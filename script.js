// script.js

document.addEventListener('DOMContentLoaded', () => {
    let blogs = [
        { title: "First Meeting of Em Tech", link: "./blogs/blog1.html" },
        { title: "Learning about Electrical Circuits", link: "./blogs/blog2.html" },
        { title: "INTRAMS", link: "./blogs/blog3.html" },
        { title: "PROPOSING A ROBOT", link: "./blogs/blog4.html" },
        { title: "FIELD TRIP", link: "./blogs/blog5.html" },
        { title: "LED, BUZZER, AND POTENTIOMETER", link: "./blogs/blog6.html" },
        { title: "PRACTICAL EXAMINATION", link: "./blogs/blog7.html" },
        { title: "FINALS ACTIVITY", link: "./blogs/blog8.html" },
        { title: "IP", link: "./blogs/blog9.html" },
        { title: "blog 10", link: "./blogs/blog10.html" }
    ];

    const blogList = document.getElementById('blog-links');

    // Optional: Clear the list if you want to regenerate it from JS
    // blogList.innerHTML = '';

    // Populate the blog links dynamically (if you want to)
    // blogs.forEach(blog => {
    //     const li = document.createElement('li');
    //     const a = document.createElement('a');
    //     a.href = blog.link;
    //     a.textContent = blog.title;
    //     a.target = "_blank";
    //     li.appendChild(a);
    //     blogList.appendChild(li);
    // });

    // Handle new blog button click
    document.getElementById('new-blog-btn').addEventListener('click', () => {
        const blogName = prompt('Enter the name of your new blog:');
        if (blogName) {
            const newBlog = document.createElement('li');
            const newLink = document.createElement('a');
            const fileName = blogName.toLowerCase().replace(/\s+/g, '_');
            const url = `./blogs/${fileName}.html`;
            newLink.href = url;
            newLink.textContent = `🆕 ${blogName}`;
            newLink.target = "_blank";
            newBlog.appendChild(newLink);
            blogList.appendChild(newBlog);
            alert(`New blog '${blogName}' added!`);
        }
    });
});
