document.querySelectorAll('.faq .btn').forEach((button) => {
    button.addEventListener('click', function () {
        const answerId = this.getAttribute('aria-controls');
        const answer = document.getElementById(answerId);
        const isExpand = this.getAttribute('aria-expanded') === 'true';
        console.log(isExpand)
        console.log(answer.innerText)
        const plusIcon = this.querySelector('.icon-plus');
        const minusIcon = this.querySelector('.icon-minus');

        answer.classList.toggle('visible');

        
        this.setAttribute('aria-expanded', !isExpand);

        // toggle icons
        minusIcon.classList.toggle('hidden');
        plusIcon.classList.toggle('hidden');
    })
})