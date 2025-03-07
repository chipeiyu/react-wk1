import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  return (
   <>
  



<header>
    <h1>Fashion Clothing Brand</h1>
    <p>Your style, your identity.</p>
</header>

<nav>
    <a href="#home">Home</a>
    <a href="#products">Products</a>
    <a href="#about">About</a>
    <a href="#contact">Contact</a>
</nav>


<section id="products">
    <h2>Our Collection</h2>
    <div className="product-gallery">
        <div className="product-card">
            <img src="https://via.placeholder.com/400x300" alt="Clothing 1"/>
            <h3>Stylish Jacket</h3>
            <p>Embrace your fashion with our stylish jacket, perfect for any season.</p>
        </div>
        <div className="product-card">
            <img src="https://via.placeholder.com/400x300" alt="Clothing 2"/>
            <h3>Casual T-shirt</h3>
            <p>Our casual T-shirt offers comfort and style with every wear.</p>
        </div>
        <div className="product-card">
            <img src="https://via.placeholder.com/400x300" alt="Clothing 3"/>
            <h3>Classic Jeans</h3>
            <p>Comfortable and durable jeans for everyday use with a timeless design.</p>
        </div>
        <div className="product-card">
            <img src="https://via.placeholder.com/400x300" alt="Clothing 4"/>
            <h3>Elegant Dress</h3>
            <p>A sophisticated and elegant dress for special occasions and beyond.</p>
        </div>
    </div>
</section>


<section id="about">
    <h2>About Us</h2>
    <p>Our clothing brand is focused on offering high-quality, stylish apparel that helps you express yourself confidently. We blend comfort, elegance, and innovation in every design.</p>
</section>


<section id="contact">
    <h2>Contact Us</h2>
    <p>Have questions or want to get in touch? Reach out to us:</p>
    <p>Email: <a href="mailto:contact@fashionbrand.com">contact@fashionbrand.com</a></p>
    <p>Follow us on social media: <a href="#">Facebook</a> | <a href="#">Instagram</a></p>
</section>


<footer>
    <p>© 2025 Fashion Clothing Brand. All Rights Reserved. | <a href="#">Privacy Policy</a></p>
</footer>


<script src="script.js"></script>




    </>
  )
}

export default App
