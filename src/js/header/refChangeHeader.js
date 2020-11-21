import filmService from '../header/apiService';
import renderFilms from './renderFilms'
import '../header/main';

refs.searchForm.addEventListener('submit', async event => {
    event.preventDefault();
    const form = event.currentTarget;
    filmService.query = form.elements.query.value;
    refs.galleryList.innerHTML = '';
    filmService.resetPage();
    renderFilms(await filmService.getFilms());
    form.reset();
});

refs.logo.addEventListener('click', () => {
    classListHome();
    setHomeActive();
});

refs.logo.addEventListener('click', async e => {
    refs.galleryList.innerHTML = '';
    renderFilms(await filmService.getPopularFilms());
});
refs.burger.addEventListener('click', clickOnBurger);

refs.navLinkLibrary.addEventListener('click', classListLibrary);

refs.navLinkHome.addEventListener('click', (e) => {
    classListHome();
    if (refs.navLinkLibrary.classList.contains('site-navigation__link--active')) {
        setHomeActive();
    }
});
refs.navLinkHome.addEventListener('click', async e => {
    refs.galleryList.innerHTML = '';
    renderFilms(await filmService.getPopularFilms())
});
refs.buttonHomeOnBurger.addEventListener('click', () => {
    classListHome();
    closeBurger()
});
refs.buttonLibraryOnBurger.addEventListener('click', () => {
    classListLibrary();
    closeBurger();
});
refs.filmsSection.addEventListener('click', openFilmView);


function classListHome() {
    refs.pagination.classList.remove('is-visible');
    refs.filmsSection.classList.remove('is-visible');
    refs.pagination.classList.remove('is-visible');
    refs.navLinkHome.classList.add('site-navigation__link--active');
    refs.header.classList.remove('header-library');
    refs.header.classList.remove('header-details');
    refs.header.classList.add('header-home');
    refs.searchForm.classList.remove('is-visible');
    refs.headerButtons.classList.add('is-visible');
    refs.headerButtons.classList.remove('flex');
    refs.filmViewSection.classList.add('is-visible');
    refs.galleryList.classList.remove('is-visible');
    refs.filmsSection.classList.remove('is-visible');
    refs.navLinkHome.classList.add('site-navigation__link--active');
    refs.header.classList.remove('header-details');
};

function openFilmView() {
    refs.headerButtons.classList.add('is-visible');
    refs.header.classList.add('header-details');
    refs.header.classList.remove('header-home');
    refs.header.classList.remove('header-library');
    refs.searchForm.classList.add('is-visible');
    refs.navLinkHome.classList.remove('site-navigation__link--active');
    refs.pagination.classList.add('is-visible');
    refs.filmViewSection.innerHTML = '';

}

function classListLibrary() {
    refs.header.classList.add('header-library')
    if (refs.header.classList.contains('header-details')) {
        refs.header.classList.add('header-library');
        refs.header.classList.remove('header-details');
    };
    refs.navLinkLibrary.classList.add('site-navigation__link--active');
    refs.pagination.classList.remove('is-visible');
    refs.header.classList.remove('header-home');
    refs.header.classList.add('header-library');
    refs.searchForm.classList.add('is-visible');
    refs.headerButtons.classList.remove('is-visible');
    refs.headerButtons.classList.add('flex');
    refs.filmViewSection.classList.add('is-visible');
    if (refs.navLinkHome.classList.contains('site-navigation__link--active')) {
        refs.navLinkHome.classList.remove('site-navigation__link--active');
        refs.navLinkLibrary.classList.add('site-navigation__link--active');
    }
};

function setHomeActive() {
    refs.navLinkLibrary.classList.remove('site-navigation__link--active');
    refs.navLinkHome.classList.add('site-navigation__link--active');
};

function clickOnBurger() {
    if (refs.header.classList.contains('header-details')) {
        refs.searchForm.classList.remove('is-visible')
    };
    refs.overlayHeader.classList.toggle('is-visible');
    refs.burger.classList.toggle('is-active');
    refs.nav.classList.toggle('flex');
    refs.nav.classList.toggle('is-visible');
    refs.searchForm.classList.toggle('is-visible');
    refs.siteNav.classList.toggle('is-visible');
    refs.headerButtons.classList.add('is-visible');
    refs.headerButtons.classList.remove('flex');
    if (refs.header.classList.contains('header-library')) {
        refs.searchForm.classList.add('is-visible');
        if (!refs.burger.classList.contains('is-active')) {
            refs.headerButtons.classList.remove('is-visible');
            refs.headerButtons.classList.add('flex');
        }
    }
};

function closeBurger() {
    refs.burger.classList.remove('is-active');
    refs.nav.classList.remove('is-visible');
    refs.nav.classList.add('flex');
    refs.overlayHeader.classList.add('is-visible');
};