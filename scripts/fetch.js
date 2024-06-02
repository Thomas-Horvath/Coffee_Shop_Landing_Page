const url = "https://thomas-horvath.github.io/Thomas_Coffee_Corner_WebSite/data/products.json"


export async function fetchProduct() {
    const response = await fetch(url);
    const data = await response.json();
    return data;
};
