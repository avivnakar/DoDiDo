import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../assets/imgs/3.jpg'
export function CreateBoard(props) {

    // console.log(props.addBoard, 'prop');
    return (
        <section>
            <div className="min-board">
                {/* <h2>New board</h2> */}
                <img src={image} alt="" />
            </div>
            <input type="text" placeholder="Add board title" />
            <button>Add background</button>
            <div className="bg-container">
                <div className="photos-title flex space-between">
                    <p>photos</p>
                    <Link to="#">see more</Link>
                </div>
                <div className="photos column flex space-even">
                    {/* render photos here */}
                    <div className="img-line ">
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
                    <Link to="">see more</Link>
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
                </div>
                <button className="create-board">Create Board</button>
            </div>
        </section>
    )
}
