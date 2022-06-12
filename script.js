const openButt = document.querySelector('.openbtn');
const closeButt = document.querySelector('.closebtn');
const container = document.querySelector('.container');
const sidebar = document.querySelector('.sidebar');

let openNav = () => {
    container.style.transition = "all 0.75s";
    container.style.gridTemplateColumns = "1fr 3fr 1fr";
    console.log('open nav');
    sidebar.style.display='';
    };

let closeNav = () => {
    container.style.transition = "all 0.75s";
    container.style.gridTemplateColumns = "0px 4fr 1fr";
    console.log('close nav');
    sidebar.style.display = 'none';
};
        
openButt.onclick = openNav;
closeButt.onclick = closeNav;