import React from 'react'
import {Login} from "../components/Login";
import homeimg1 from "../assets/home/homeimg1.png"

export const Home = () => {

    return(
        <>
            <div>
                <Login/>
                <div className="container">
                    <div className="row">

                        <div className="col l12" style={{marginTop:50, marginBottom:50}}>
                            <div className="col l6">
                                <img src={homeimg1} className="responsive-img"/>
                            </div>
                            <div className="col l6" style={{marginTop:90}}>
                                <h3 className="homeheader" style={{marginBottom:20}}>Make a great Career</h3>
                                <p className="hometext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>
                                <button className="button-filled-blue">Know more</button>
                            </div>
                        </div>

                        <div className="col l12" style={{marginTop:50, marginBottom:50}}>
                            <div className="col l3">
                                <h3>Featured vacancies by category</h3>
                                <button className="button-filled-blue" style={{marginTop:20}}>Explore more</button>
                            </div>
                            <div className="col l3 push-l1" style={{marginTop:25}}>
                                <h5 className="homeheader">Development</h5>
                                <div>
                                    <a>Python Developer</a>
                                    <p><span>Vacancies:33 790 495</span></p>
                                </div>
                                <div>
                                    <a>Python Developer</a>
                                    <p><span>Vacancies:33 790 495</span></p>
                                </div>
                                <div>
                                    <a>Python Developer</a>
                                    <p><span>Vacancies:33 790 495</span></p>
                                </div>
                            </div>

                            <div className="col l3 push-l1" style={{marginTop:25}}>
                                <h5 className="homeheader">Development</h5>
                                <div>
                                    <a>Python Developer</a>
                                    <p><span>Vacancies:33 790 495</span></p>
                                </div>
                                <div>
                                    <a>Python Developer</a>
                                    <p><span>Vacancies:33 790 495</span></p>
                                </div>
                                <div>
                                    <a>Python Developer</a>
                                    <p><span>Vacancies:33 790 495</span></p>
                                </div>
                            </div>


                            <div className="col l3 push-l1" style={{marginTop:25}}>
                                <h5 className="homeheader">Development</h5>
                                <div>
                                    <a>Python Developer</a>
                                    <p><span>Vacancies:33 790 495</span></p>
                                </div>
                                <div>
                                    <a>Python Developer</a>
                                    <p><span>Vacancies:33 790 495</span></p>
                                </div>
                                <div>
                                    <a>Python Developer</a>
                                    <p><span>Vacancies:33 790 495</span></p>
                                </div>
                            </div>
                        </div>

                        <div className="col l12" style={{marginTop:50, marginBottom:50}}>
                            <div className="col l6">
                                <h2>Hot Listing Job</h2>
                                <div className="col l6">
                                    dmvdkfmvkfmvlfmvlfmlkvfmvkfmvfklmvkfmlkvdmkvklmfkl
                                </div>
                                <div className="col l3">
                                    <button>apply</button>
                                </div>

                            </div>
                            <div className="col l6" style={{marginTop:90}}>
                                <img src={homeimg1} className="responsive-img"/>
                            </div>
                        </div>

                        <div className="col l12" style={{marginTop:50, marginBottom:50}}>
                            <div className="col l6">
                                <img src={homeimg1} className="responsive-img"/>
                            </div>
                            <div className="col l6" style={{marginTop:90}}>
                                <h3 className="homeheader" style={{marginBottom:20}}>Make a great Career</h3>
                                <p className="hometext">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>
                                <button className="button-filled-blue">Know more</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}