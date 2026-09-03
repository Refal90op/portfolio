 const menuToggle = document.querySelector('.menu-toggle'); /* أنشئ ثابت اسمه menuToggle، وخزّن فيه العنصر اللي class حقه menu-toggle*/
 const navList = document.querySelector('nav ul'); /* أنشئ ثابت اسمه navList، وخزّن فيه العنصر اللي هو ul داخل nav*/
 menuToggle.addEventListener('click', () => {
     navList.classList.toggle('active'); /* لما تضغط على menuToggle، أضف أو شيل class اسمه active من navList */}
    );
 navList.addEventListener('click', () => {
        navList.classList.remove('active'); /* لما يصير ضغط داخل navList، شيل class اسمه active عشان تقفل القائمة */
 });
const smartLinks = document.querySelectorAll('.smart-link');

smartLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();

        const url = link.href;
        const isMobile = window.innerWidth <= 768;

        if (isMobile) {
            window.location.href = url;
        } else {
            window.open(url, '_blank', 'noopener,noreferrer');
        }
    });
});