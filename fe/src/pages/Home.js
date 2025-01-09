import React from 'react'
import '../css/Home.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import bannerImg from '../assets/images/banner.png'
export default function Home() {
  return (
    <div id='home-container'>
        <Header/>
        <main>
          <div id='banner'>
              <img src={bannerImg}/>
          </div>
        </main>
        <Footer/>
    </div>
  )
}
