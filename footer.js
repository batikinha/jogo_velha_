document.addEventListener('DOMContentLoaded', () => {
    const footer = document.createElement('footer');
    footer.innerHTML = 'Made by Batika';
    footer.style.position = 'fixed';
    footer.style.bottom = '10px';
    footer.style.width = '100%';
    footer.style.textAlign = 'center';
    footer.style.fontSize = '1rem';
    footer.style.color = '#333';
    document.body.appendChild(footer);
});
