 const menuToggle = document.querySelector('.menu-toggle'); /* أنشئ ثابت اسمه menuToggle، وخزّن فيه العنصر اللي class حقه menu-toggle*/
 const navList = document.querySelector('nav ul'); /* أنشئ ثابت اسمه navList، وخزّن فيه العنصر اللي هو ul داخل nav*/
 menuToggle.addEventListener('click', () => {
     navList.classList.toggle('active'); /* لما تضغط على menuToggle، أضف أو شيل class اسمه active من navList */}
    );
 navList.addEventListener('click', () => {
        navList.classList.remove('active'); /* لما يصير ضغط داخل navList، شيل class اسمه active عشان تقفل القائمة */
 });
