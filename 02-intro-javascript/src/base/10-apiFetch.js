const apiKey = 'mdW4aYALLjvcNAhzOdnl7KYUzUHuS2mj';
const httpCall = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

// httpCall.then(resp => {
//     resp.json().then(data => {
//         console.log(data);
//     })
// })

httpCall
.then(resp => resp.json())  //Promesas en cadena.
.then(({data}) => {   //{data} porque usamos la desestructuración y de esta forma evitamos en la línea 13 data.data. ...
    // console.log(data.images.original.url);
    const {url} = data.images.original;
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);
})
.catch(console.warn);   //Este catch atrapa todos los elementos, no es necesario hacerlo individualmente por cada then.