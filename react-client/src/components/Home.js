import React from 'react'
const Home = ({ switchView }) => {
    return (
        <div class="AllProducts" id="Products">

            <div class="Product" id="Pc" onClick={() => switchView("Laptops")}>
                <img class="img" src={"https://cdn.thewirecutter.com/wp-content/media/2022/10/windowsultrabooks-2048px-2014-2x1-1.jpg?auto=webp&quality=75&crop=2:1&width=980&dpr=1.5"} alt="pc" />
            </div>

            <div class="Product" id="Smartphone" onClick={() => switchView("Smartphones")}>
                <img class="img" src="https://lh3.googleusercontent.com/wJ_nR3LJaIu_iWWwX2I_Yf2TlOnLMCm0F-Dp62cY-rNKbc90AHxzMucC5N3GLt75Uzt3jAgxInWKV2HdKqg8GyGZDQCUcHog-SzdfMXNgALhSQ" alt="smartphone" />
            </div>

            <div class="Product" id="Smartwatche" onClick={() => switchView("Smartwatches")}>
                <img class="img" src="https://lh3.googleusercontent.com/xNrOuZz9BoLlILA7nkqJf6Ty_CjcF__xXNXkDi9-B55rmT223hexrlDHpqnQxgXBVNb4zKk6oPISvSAbzb3zZ9dZ-jUtqDzh5_D6LAM9sKTK" alt="smartwatch" />
            </div>

            <div class="Product" id="Accessoire" onClick={() => switchView("Accessories")}>
                <img class="img" src="https://lh3.googleusercontent.com/eeC5lPaP4qW-_3eA29R9NEyP-GGAoOJ0derQAwXUeEXOlsVra6b2x9rKzSqssxb_g61o8zsebcbdwkLgqDiTyxPfQZeH3DHi2tdEvIpnTd6M" alt="accessories" />
            </div>
        </div>
    )
}






export default Home