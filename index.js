const fetchData = async searchTerm => {
    const response = await axios.get('http://www.omdbapi.com/', {
        params: {
            apikey: 'd3f44806', 
            s: searchTerm
        }
    });
    console.log(response.data);
}; 

const input = document.querySelector('input'); 

const debounce = (func) => {
    let timeoutId;
    return () => {
        if (timeoutId){//checking to see if timeoutId is defined
            clearTimeout(timeoutId) //if it is we are going to clear timeoutId
        }
        timeoutId = setTimeout(() => {
            func();
        }, 1000)
    };
};

let timeoutId; 
const onInput = event => {
    if (timeoutId) {
        clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
        fetchData(event.target.value);
    }, 500);
}; 

input.addEventListener('input', onInput);  