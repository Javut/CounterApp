


export const getImagen = async() => {

    try { 

        const apiKey = 'xfCHnOm6SbqOxgZwZIlj1jYM8epjE5Rc'
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json();
    
        const {url} = data.images.original

        return url;
    
        // const img = document.createElement('img');
        // img.src = url;
        // document.body.append(img);

    }catch (error){
        //handling of error 
       return 'No existe';
    }


   


}


// getImagen();





// peticion
//     .then(resp => resp.json())
//     .then(({ data }) => {
//         const { url } = data.images.original;

//         const img = document.createElement('img');
//         img.src = url;

//         document.body.append(img);
//         console.log("Ejemplo")
//         console.log(url);
//     })


//     .catch(console.warn);

