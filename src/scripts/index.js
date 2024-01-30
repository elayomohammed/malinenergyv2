// Handler for search icon and search input field
const handleSearchIcon = () => {
    const searchIcon = document.getElementsByClassName('search-icon')[0];
    const searchInput = document.getElementsByClassName('search-input')[0];
    searchIcon.addEventListener('click', () =>{
        if(searchInput.style.display = 'none'){
            searchInput.style.display = 'block';
            searchIcon.style.display = 'none';
            return;
        }
        return;
    });
    searchInput.addEventListener('mouseout', () =>{
        searchInput.style.display = 'none';
        searchIcon.style.display = 'block';
    });
}
handleSearchIcon();

// Handler for mobile menu button click and mobile navigation buttons
const handleMobileMenuButtonClick = () =>{
    const menuBtn = document.querySelector('#menu-btn');
    const mobileNav = document.querySelector('#mobile-nav');
    menuBtn.addEventListener('click', () => {
        if(mobileNav.style.display == 'inline'){
            mobileNav.style.display = 'none';
        }else{
            mobileNav.style.display = 'inline';
        }
    })
}
handleMobileMenuButtonClick();
