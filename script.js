const faqItems = document.querySelectorAll('.faq');

faqItems.forEach(item => {
    const btn = item.querySelector('.faq-question');
    btn.addEventListener('click',()=>{
        item.classList.toggle('active');
    });
});