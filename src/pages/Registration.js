import React, {Component} from 'react'
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import {AsEmployee} from "../components/registration/AsEmployee";
import {AsCompany} from "../components/registration/AsCompany";

class Registration extends Component{
    componentDidMount() {
        M.Tabs.init(this.Tabs);
    }



    render(){
        return(
            <>
                <div className = 'row'>
                    <div className = 'col s12 registerback'>
                        <div className='container' style={{paddingTop:60}}>
                            <div className='col s10 offset-s1 card registercard'>
                                <h5>Registration</h5>

                                <ul
                                    ref={Tabs => {
                                        this.Tabs = Tabs;
                                    }}
                                    id="tabs-swipe-demo"
                                    className="tabs"
                                >
                                    <li className="tab col s3">
                                        <a href="#test-swipe-1">As Employee</a>
                                    </li>
                                    <li className="tab col s3">
                                        <a href="#test-swipe-2">As Company</a>
                                    </li>
                                </ul>

                                <div id="test-swipe-1">
                                    <AsEmployee/>
                                </div>


                                <div id="test-swipe-2">
                                    <AsCompany/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='pageitem col s12'>
                        <div className='container'>
                            <div className='col s10 offset-s1' style={{paddingTop:30, paddingBottom:50}}>
                                <div className='col s10 left'>
                                    <h4>Get to start your JobBook right now!</h4>
                                    <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                                </div>
                                <div className='col s2 right'>
                                    <button className=''>start</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}

export default Registration;
