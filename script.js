document.addEventListener('DOMContentLoaded', () => {
    const nameForm = document.getElementById('nameForm');
    
    nameForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const userName = document.getElementById('userName').value.trim();
        localStorage.setItem('agarthaUserName', userName);
        window.location.href = 'welcome.html';
    });
});