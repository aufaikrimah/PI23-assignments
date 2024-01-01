import React, { useState, useEffect } from 'react';
import { getProducts } from '../api/api';

import '../App.css';
import Header from './Header';
import ButtonLink from './ButtonLink';
import Showcase from './Showcase';
import Footer from './Footer';
import Navbar from './Navbar';

import whatsapp from '../assets/img/whatsapp.svg'
import shopee from '../assets/img/shopee.png'
import tokopedia from '../assets/img/tokopedia.svg'
import lazada from '../assets/img/icon-lazada.png'
import instagram from '../assets/img/instagram.svg'
import tiktok from '../assets/img/tiktok.svg'

function Home() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [products, setProducts] = useState([]);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const productsData = await getProducts();
                setProducts(productsData);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchData();
    }, []);

    const buttonLink = [
        {
            name: 'WhatsApp',
            img: whatsapp,
            url: '',
        },
        {
            name: 'Shopee',
            img: shopee,
            url: '',
        },
        {
            name: 'Tokopedia',
            img: tokopedia,
            url: '',
        },
        {
            name: 'Lazada',
            img: lazada,
            url: '',
        },
        {
            name: 'Instagram',
            img: instagram,
            url: '',
        },
        {
            name: 'Tiktok',
            img: tiktok,
            url: '',
        },
    ]

    return (
        <div>
            <Navbar></Navbar>
            <div className={`app ${isDarkMode ? 'dark' : 'light'}`}>

                <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

                <div className="flex flex-wrap">
                    {buttonLink.map((button, index, isDarkMode) =>
                        <ButtonLink key={index} buttonLink={button} isDarkMode={isDarkMode} />)}
                </div>

                <div className='my-6'>
                    <h1 className='text-2xl font-bold mx-3 my-1'>Showcase</h1>
                    <div className='flex flex-wrap'>
                        {products.map((item) => (
                            <Showcase products={item} key={item.id} isDarkMode={isDarkMode} />
                        ))}
                    </div>
                </div>

                <Footer></Footer>


            </div>
        </div>

    );
}

export default Home;
