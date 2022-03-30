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
                            <div className='col s10 offset-s1 card registercard z-depth-0' style={{marginBottom:90, marginTop:90}}>
                                <h4 className='label-reg'>Registration</h4>
                                <div className='col s12' style={{marginTop:20}}>
                                    <ul
                                        ref={Tabs => {
                                            this.Tabs = Tabs;
                                        }}
                                        id="tabs-swipe-demo"
                                        className="tabs transparent"
                                    >
                                        <li className="tab transparent col s3">
                                            <a className='tabber' href="#test-swipe-1">As Employee</a>
                                        </li>
                                        <li className="tab transparent col s3">
                                            <a className='tabber' href="#test-swipe-2">As Company</a>
                                        </li>
                                    </ul>

                                    <div id="test-swipe-1" style={{marginTop:30}}>
                                        <AsEmployee/>
                                    </div>


                                    <div id="test-swipe-2" style={{marginTop:30}}>
                                        <AsCompany/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='pageitem col s12'>
                        <div className='container'>
                            <div className='col s10 offset-s1' style={{paddingTop:30, paddingBottom:50}}>
                                <div className='col s10 left'>
                                    <h4 className='foot-above-h4'>Get to start your JobBook right now!</h4>
                                    <span className='foot-above-span'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span>
                                </div>
                                <div className='col s2 right'>
                                    <button style={{marginTop:40}} className='button-filled'>Start</button>
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
