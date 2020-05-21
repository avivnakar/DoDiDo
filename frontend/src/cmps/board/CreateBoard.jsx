import React from 'react';
import image from '../../assets/imgs/3.jpg'
export function CreateBoard(props) {
    return (
        <section>
            <div className="min-board">
                <img src={image} alt="" />
                <input type="text" placeholder="Add board title" />
            </div>

            <button>Add background</button>
            <div className="bg-container">
                <h2>board background</h2>
                <div className="photos-title flex space-between">
                    <p>photos</p>
                    <a href="#">see more</a>
                </div>
                <div className="photos column flex space-even">
                    {/* render photos here */}
                    <div className="img-line">
                        <img src={image} alt="" />
                        <img src={image} alt="" />
                        <img src={image} alt="" />
                    </div>
                    <div className="img-line">
                        <img src={image} alt="" />
                        <img src={image} alt="" />
                        <img src={image} alt="" />
                    </div>
                    <div className="img-line">
                        <img src={image} alt="" />
                        <img src={image} alt="" />
                        <img src={image} alt="" />
                    </div>
                </div>
                <div className="colors-title flex space-between">
                    <p>colors</p>
                    <a href="">see more</a>
                </div>
                <div className="colors column flex space-even">
                    {/* render colors here */}
                    <div className="img-line">
                        <img src={image} alt="" />
                        <img src={image} alt="" />
                        <img src={image} alt="" />
                    </div>
                    <div className="img-line">
                        <img src={image} alt="" />
                        <img src={image} alt="" />
                        <img src={image} alt="" />
                    </div>
                    <div className="img-line">
                        <img src={image} alt="" />
                        <img src={image} alt="" />
                        <img src={image} alt="" />
                    </div>
                </div>
                <button className="create-board">Create Board</button>
            </div>
        </section>
    )
}
