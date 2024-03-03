import { useState } from "react";

const Total = () => {
    const [hitung, setHitung] = useState (initialState = 0);

    return (
        <div class = "card">
            <link rel = "stylesheet" href = "App.css"></link>
            <img src = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.britishgram.com%2Fproducts%2Fwhiskas-chicken-in-jelly-wet-adult-cat-food-pouches&psig=AOvVaw0R9ybCqrTCeBa0J9X44wAo&ust=1708067016330000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCLjVm8_jrIQDFQAAAAAdAAAAABAN" style="width:100%"></img>
            <ul class = "product-name"></ul>
            <p class = "quantity">Jumlah: {hitung} </p>
            <button onClick = {() => setHitung (hitung + 1)}>Tambah</button>
            <h5 class = "price">Rp30000</h5>
            <p><button>Delete Product</button></p> 
        </div>
    );
};

export default Total;