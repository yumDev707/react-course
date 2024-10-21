import { useState, useEffect } from "react";

const localCache = {};  //Almacenamos data en cache si la url ya ha sido anteriormente solicitada, de forma que evitamos rellamarla.
//https://tanstack.com/query/latest Librería de manejo de cache.

export const useFetch = (url) => {
    //Estado inicial.
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: false,
        error: null
    });

    useEffect(() => {
        getFetch();
    }, [url]);

    const setLoadingState = () => {
        setState({
            data: null,
            isLoading: true,
            hasError: false,
            error: null
        });
    }

    const getFetch = async() => {
        //Comprobamos si la url ya ha sido almacenada anteriormente y de ser así recuperamos la data.
        if(localCache[url]) {
            console.log("Usando cache...");
            setState({
                data: localCache[url],
                isLoading: false,
                hasError: false,
                error: null
            });
            return;
        }

        setLoadingState();
        const resp = await fetch(url);
        
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        if(!resp.ok) {
            setState({
                data: null,
                isLoading: false,
                hasError: true,
                error: resp.statusText
            });
            return;
        }

        const data = await resp.json();
        setState({
            data: data,
            isLoading: false,
            hasError: false,
            error: null
        })

        //Manejo del cache. Almacenamos la info.
        localCache[url] = data;
    }

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError
  };
}
