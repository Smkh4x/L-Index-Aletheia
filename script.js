async function checkInput() {
    const min = 4;
    let input = document.getElementById('input').value;

    if (input.length < min) {
        document.getElementById('message').innerHTML = "La pensée requiert plus de précision.";
        return;
    }

    try {
        const res = await fetch("https://api-wisdom.deontex.com/api/v1/quotes");
        const data = await res.json();

        const api = data[0]

        document.getElementById('ma9ola-1').innerHTML = `
            <p>${api}</p>
        `;

    } catch (error) {
        console.error(error);
        alert("Kayen mochkil f API");
    }
}