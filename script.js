// script.js
document.addEventListener('DOMContentLoaded', () => {
    const mainContent = document.getElementById('content');
    const page = window.location.pathname.split('/').pop();

    let contentFile = '';
    if (page === 'index.html' || page === '') {
        contentFile = 'content-index.html';
    } else if (page === 'git-cheat-sheet.html') {
        contentFile = 'content-git.html';
    }

    if (contentFile) {
        fetch(contentFile)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to load content');
                }
                return response.text();
            })
            .then(html => {
                mainContent.innerHTML = html;
            })
            .catch(error => {
                mainContent.innerHTML = '<p>Error loading content.</p>';
                console.error('Error loading content:', error);
            });
    }
});
