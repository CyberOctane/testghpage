var sector;
var service;
var openFilter;

select("sector");
select("service");
all();

// show dropdown-menu on click 
var filters = document.getElementsByClassName("filter");
for (i = 0; i < filters.length; i++) {
    filters[i].addEventListener('click', function (e) {
        if (openFilter !== undefined && openFilter !== this) {
            toggle_menu();
            openFilter = this;
            toggle_menu();
        } else if (openFilter === this) {
            toggle_menu();
            openFilter = undefined;
            reset_page_heading();
        } else {
            openFilter = this;
            toggle_menu();
        }
        e.stopPropagation();
    })
}

//toggle menu
function toggle_menu() {
    document.getElementById(openFilter.id + "-menu").classList.toggle("expand-menu");
    openFilter.classList.toggle("filter-open");
    expand_page_heading();
}

//it expand the page heading
function expand_page_heading() {
    document.getElementById("page-heading").style.height = "43vh";
}

//it reset the page heading
function reset_page_heading() {
    document.getElementById("page-heading").style.height = "";
}

//close open menu on click on document
document.addEventListener('click', function () {
    toggle_menu();
    openFilter = undefined;
    reset_page_heading();
    //alert(openMenu);
})


//dropdown-menu - select category to show
function select(category, ) {
    var menu = document.getElementById(category + "-menu");
    menu.addEventListener('click', function (e) {
        if (e.target.tagName != 'A') {
            e.stopPropagation();
            return;
        } else {
            window[category] = e.target.id;
            //set button text
            document.getElementById(category + "-btn").textContent = e.target.textContent;
            filter();
        }

    }, false);
}

//'all' button - show all projects
document.getElementById("all").onclick = function () {
    all()
};

function all() {
    sector = "project-item";
    service = "project-item";
    document.getElementById("service-btn").textContent = "All";
    document.getElementById("sector-btn").textContent = "All";
    filter();
}

//filter gallery & set button text by selected categories
function filter() {
    var all = document.getElementsByClassName("project-item");
    for (i = 0; i < all.length; i++) {
        all[i].classList.remove("show");
        if (all[i].classList.contains(sector) && all[i].classList.contains(service)) {
            all[i].classList.add("show");
        }
    }
}