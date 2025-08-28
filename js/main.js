const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classlist.remove('active-link');
    }
    for(tabcontent of tabcontents){
        tabcontent.classlist.remove('active-tab');
    }
}