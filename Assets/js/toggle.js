document.querySelectorAll('.project-item').forEach(item => {
    item.addEventListener('click', () => {
        const projectContent = item.querySelector('.project-content');
        projectContent.classList.toggle('hidden');
    });
});