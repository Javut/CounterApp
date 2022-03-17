

const apiKey = 'CsNzfGj3VFrdvQIAkkHxrJUGwGJJV05N'

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion
    .then(resp => resp.json())
    .then(({ data }) => {
        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
        console.log("Ejemplo")
        console.log(url);
    })


    .catch(console.warn);

