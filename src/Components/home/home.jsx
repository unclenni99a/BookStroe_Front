import React,{useState, useEffect} from 'react'
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './home.scss' 

export default function Home() {
    return (
        <div id="homePage" className="container">
            <h1>Welcome to our BookStore</h1>
            <h5>You can find all the books you need here</h5>

            <div id="products">
                Here are some of our products:

            </div>
        </div>
    )
}
