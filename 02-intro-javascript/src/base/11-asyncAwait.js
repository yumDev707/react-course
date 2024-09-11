const getImage = async() => {
    try{
        const apiKey = 'mdW4aYALLjvcNAhzOdnl7KYUzUHuS2mj';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await resp.json();
        const {url} = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    } catch (error) {
        console.log(error);
    }
}
getImage();