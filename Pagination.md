# Infinite Scroll Pagination
Top albums integrates a custom infinite scroll pagination feature. The user can scroll down to the bottom of the page to load more albums. The feature is implemented using the Intersection Observer API, which allows the app to detect when the user has scrolled to the bottom of the page. When the user scrolls to the bottom of the page, the app renders the next 10 albums from the iTunes API.

The pagination feature is implemented in the main App component. The app will only render the amount of album cards specified by the "showMore" state, which defaults to 10. The "showMore" state is updated by the "handleShowMore()" function which is triggered by intersection observer when the footer component is in view.

The pagination feature is implemented before the search feature so that the search is not limited to only albums that have already been rendered.