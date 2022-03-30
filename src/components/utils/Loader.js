import React from 'react'

export const Loader = () => (
    <div style={{display: 'flex', justifyContent: 'center', padding: '3rem'}}>
        <div className="preloader-wrapper small active">
            <div className="spinner-layer spinner-black-only">
                <div className="circle-clipper left">
                    <div className="circle" />
                </div>
                <div className="gap-patch">
                    <div className="circle" />
                </div>
                <div className="circle-clipper right">
                    <div className="circle" />
                </div>
            </div>
        </div>
    </div>
)
