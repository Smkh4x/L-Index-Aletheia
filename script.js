async function checkInput() {
    const min = 4;
    let input = document.getElementById('input').value;

    if (input.length < min) {
        document.getElementById('message').innerHTML = "La pensée requiert plus de précision.";
        return;
    }

    try {
        const res = await fetch(`https://api-wisdom.deontex.com/api/v1/quotes?search=${input}`);
        const data = await res.json();

        const foundData = data.data.filter(q => 
            q.philosopher_name.toLowerCase().includes(input.toLowerCase())
        );

        if (foundData.length) {
            document.getElementById('ma9ola-1').innerHTML = foundData.map(q => `
                <div>
                    <h3 style="color :#009DFF" >${q.philosopher_name}<h3>
                    <p>${q.quote_text}</p>
                    <br>
                </div>
            `);
        } else {
            document.getElementById('ma9ola-1').innerHTML = "Makayn 7ta result";
        }

    } catch (error) {
        console.error(error);
        alert("Kayen mochkil f API");
    }
}
