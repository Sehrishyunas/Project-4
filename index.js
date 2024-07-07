document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById('search');
    const juiceList = document.getElementById('juice-list');
    const juiceItems = juiceList.getElementsByClassName('juice-item');

    searchInput.addEventListener('keyup', () => {
        const filter = searchInput.value.toLowerCase();

        for (let i = 0; i < juiceItems.length; i++) {
            const juiceName = juiceItems[i].getElementsByTagName('h2')[0].textContent.toLowerCase();
            if (juiceName.indexOf(filter) > -1) {
                juiceItems[i].style.display = "";
            } else {
                juiceItems[i].style.display = "none";
            }
        }
    });
});
