document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');

    searchInput.addEventListener('input', function() {
        const query = searchInput.value.toLowerCase();
        searchResults.innerHTML = '';

        if (query.length === 0) {
            return; // If the search query is empty, don't do anything
        }

        const db = firebase.firestore();
        db.collection('blogs').get().then((snapshot) => {
            const blogs = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));

            const filteredBlogs = blogs.filter(blog =>
                blog.title.toLowerCase().includes(query)
            );

            filteredBlogs.forEach(blog => {
                const resultItem = document.createElement('div');
                resultItem.classList.add('resultItem');
                resultItem.innerHTML = `<h2>${blog.title}</h2><p>${blog.content}</p>`;
                searchResults.appendChild(resultItem);
            });

            if (filteredBlogs.length === 0) {
                searchResults.innerHTML = '<p>No blogs found.</p>';
            }
        }).catch((error) => {
            console.error('Error fetching blogs:', error);
        });
    });
});
