// Select the sidebar and the header elements
const sidebar = document.querySelector('.pc-sidebar');
const mHeader = document.querySelector('.m-header');
const toggleButton = document.querySelector('#sidebar-hide');

// Function to toggle sidebar visibility
toggleButton.addEventListener('click', function () {
    // Toggle the sidebar's active class
    sidebar.classList.toggle('collapsed');
    
    // Toggle visibility of the header when sidebar is collapsed
    if (sidebar.classList.contains('collapsed')) {
        mHeader.style.display = 'block'; // Show header
    } else {
        mHeader.style.display = 'none'; // Hide header
    }
});
