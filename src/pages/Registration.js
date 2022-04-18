import React, {Component} from 'react'
import {AsEmployee} from "../components/registration/AsEmployee";
import {AsCompany} from "../components/registration/AsCompany";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";

class Registration extends Component{


    render(){
        return(
            <>
                <div className='card-back'>
                    <p style={{color:'transparent'}}>123</p>
                    <div style={{marginTop:80, marginBottom:80}} className='card'>
                        <h2 style={{color:'#144AF1'}}>Registration</h2>
                        <Tabs selectedTabClassName="bg-white" TabClassName='bg-black'>
                            <TabList style={{marginTop:40, marginBottom:80, borderWidth:1, borderColor:'#0016DC'}}>
                                <Tab focus={false} style={{paddingLeft:30, paddingRight:30}}><p>As Employee</p></Tab>
                                <Tab focus={false} style={{paddingLeft:30, paddingRight:30}}><p>As Company</p></Tab>
                            </TabList>

                            <TabPanel>
                                <div>
                                    <AsEmployee/>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div>
                                    <AsCompany/>
                                </div>
                            </TabPanel>
                        </Tabs>
                    </div>
                    <p style={{color:'transparent'}}>123</p>
                </div>

                <div style={{background:`linear-gradient(90deg, #174FF1 3.32%, #6ACEE2 100%)`, display:'flex', alignItems:'center', paddingRight:'20%', paddingLeft:'20%'}}>
                    <div style={{marginRight:60, marginTop:100, marginBottom:100}}>
                        <h2 style={{color:'white'}}>Get to start your JobBook right now!</h2>
                        <p style={{color:'white'}} >Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                    <div>
                        <button className={'button-filled-white'}>start</button>
                    </div>
                </div>
            </>
        )
    }
}

export default Registration;
