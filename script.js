document.addEventListener('DOMContentLoaded',()=>{
    const clock = document.getElementById('Clockbox');
    setInterval(() => {
        const date = new Date();
        clock.innerHTML = date.toLocaleTimeString();
    }, 1000);

})