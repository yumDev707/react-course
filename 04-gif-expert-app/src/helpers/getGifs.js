export const getGifs = async (category) => {
    //Doc: https://developers.giphy.com/docs/api/endpoint/#search
    const url = `https://api.giphy.com/v1/gifs/search?api_key=sNAkgOKEcMhNXPMxCpe20cIz934Nm2ui&q=${category}&limit=10`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url
    }))

    return gifs;
}