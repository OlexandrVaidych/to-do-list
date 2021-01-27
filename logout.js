const logout = document.getElementById('logout');

function goStartPage() {
    location.href='index.html';
}

logout.addEventListener("click", goStartPage);