// script.js
function toggleContent(id) {
    var content = document.getElementById(id);
    if (content.classList.contains('show')) {
        content.classList.remove('show');
    } else {
        content.classList.add('show');
    }
}
