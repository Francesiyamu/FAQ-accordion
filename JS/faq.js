
//you want to select all the faq elements and add an event listener to each one
//to toggle the visibliity of the content and change the icon when the button is clicked
document.querySelectorAll('.faq').forEach(faq => {
    const button = faq.querySelector('.btn button');
    const content = faq.querySelector('article');
    const plusIcon = faq.querySelector('.image');

    button.addEventListener('click', () => {
         // Check if the content is currently hidden
         if (content.hidden) {
            //Show the content
            content.hidden = false;

            // Change the icon to the minus icon
            plusIcon.src = 'assets/images/icon-minus.svg';
        } else {
            // Hide the content
            content.hidden = true; 

            // Change the icon to the plus icon
            plusIcon.src = 'assets/images/icon-plus.svg';
        }
    });
});