svg4everybody();

const buttonSearch = document.querySelector('#button-search');

buttonSearch.addEventListener('click', (event) => {
    event.preventDefault();
    const search = event.target.parentElement;

    if (search.classList.contains('active')) {
        search.classList.remove('active');
    }
    else search.classList.add('active');
});

window.addEventListener('click', (event) => {
    if (!buttonSearch.parentElement.contains(event.target)) {
        buttonSearch.parentElement.classList.remove('active');
    }
});
