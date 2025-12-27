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
