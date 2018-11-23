function searchUIJSON() {
    var SearchInput, SearchFilter, JSONList, ButtonList, button, i;
    SearchInput = document.getElementById("SearchUIInput");
    SearchFilter = SearchInput.value.toUpperCase();
    JSONList = document.getElementById("JSONList");
    ButtonList = JSONList.getElementsByTagName("div");
    for (i = 0; i < ButtonList.length; i++) {
        button = ButtonList[i].getElementsByTagName("button")[0];
        if (button.innerHTML.toUpperCase().indexOf(SearchFilter) > -1) {
            ButtonList[i].style.display = "";
        } else {
            ButtonList[i].style.display = "none";
        }
    }
}