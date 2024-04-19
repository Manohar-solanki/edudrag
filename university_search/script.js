function searchUniversities() {
    var input, filter, ul, li, button, i, txtValue;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById('universityList');
    li = ul.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
        button = li[i].getElementsByTagName('button')[0];
        txtValue = button.textContent || button.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = '';
        } else {
            li[i].style.display = 'none';
        }
    }
}
