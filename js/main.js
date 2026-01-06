// Mobile sidebar toggle
function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('active');
}

// Initialize syntax highlighting if highlight.js is loaded
document.addEventListener('DOMContentLoaded', function() {
    if (typeof hljs !== 'undefined') {
        hljs.highlightAll();
    }
});

document.addEventListener("DOMContentLoaded", function() {
    // 1. Find the sidebar and the active link
    const sidebar = document.getElementById('sidebar');
    const activeLink = sidebar.querySelector('.active');

    // 2. If an active link exists, scroll it into view
    if (activeLink) {
        activeLink.scrollIntoView({
            block: 'center', // Centers the item in the sidebar
            inline: 'nearest' 
        });
    }
});