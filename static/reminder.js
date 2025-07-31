document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('medicine-form');
    const list = document.getElementById('medicine-list');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('medicine-name').value.trim();
        const time = document.getElementById('timing').value;
        const refill = document.getElementById('refill-date').value;

        if (!name || !time || !refill) return alert("All fields are required!");

        const li = document.createElement('li');
        li.textContent = ${name} - Time: ${time}, Refill by: ${refill};
        list.appendChild(li);

        form.reset();
    });
});