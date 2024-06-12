
const url = "https://thomas-horvath.github.io/Thomas_Coffee_Corner_WebSite/data/products.json";

export async function fetchProduct() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        // console.log(data);
        return data;
    }
    catch(err) {
        console.error(err);
    }
};


