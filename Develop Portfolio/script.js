let menuIcon = document.querySelector(".menuIcon");
let sidebar = document.querySelector(".sidebar");

menuIcon.addEventListener("click",()=>{
    if(sidebar.classList.contains("controlSidebar")){
        sidebar.classList.remove("controlSidebar")
        sidebar.classList.add("sidebarOpen")
    }else if(sidebar.classList.contains("sidebarOpen")){
        sidebar.classList.remove("sidebarOpen")
        sidebar.classList.add("sidebarClose")
    }
    else{
        sidebar.classList.remove("sidebarClose")
        sidebar.classList.add("sidebarOpen")
    }
})


/*for dark mode*/
let html = document.querySelector("html");
let darkMode = document.querySelector(".fa-lightbulb");

darkMode.addEventListener("click",()=>{
    html.classList.toggle("dark");
})