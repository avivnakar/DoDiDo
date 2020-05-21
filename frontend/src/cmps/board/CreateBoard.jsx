import React, { Component } from 'react'
import image from '../../assets/imgs/1.png'
export function CreateBoard() {
    return (
        <section>
            <input type="text" placeholder="Add board title" />
            <button>Add background</button>
            <div className="bg-container">
                <h2>board background</h2>
                <div className="photos-title flex space-between">
                    <p>photos</p>
                    <a href="">see more</a>
                </div>
                <div className="photos flex space-even">
                    {/* render photos here */}
                    <img src={image} alt="" />

                </div>
                <div className="colors-title flex space-between">
                    <p>colors</p>
                    <a href="">see more</a>
                </div>
                <div className="colors flex space-even">
                    {/* render colors here */}
                    {/* <img src={require('../assets/imgs/2.jpg')} alt="" />
                    <img src={require('../assets/imgs/1.png')} alt="" />
                    <img src={require('../assets/imgs/2.jpg')} alt="" /> */}
                </div>
            </div>
        </section>
    )
}
