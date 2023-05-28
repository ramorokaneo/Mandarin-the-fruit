import React from 'react'
import './first_page.css'

import logo from '../assets/logo.jpg';

import {Modal,ModalHeader,ModalBody} from 'reactstrap';
import { useState } from 'react'
const first_page = () => {
    const [Modal,setmodal]=useState(true);
    return (
        <div className='header' id='header'>
            <div className="navigation">
                <a href=""className='logo'><img src={logo} alt="" /></a>
                <ul className="nav-list d-flex">
                    <li className="nav-item">
                        <a href="/" className='nav-link'>Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="/" className='nav-link'>About</a>
                    </li>
                    <li className="nav-item">
                        <a href="/" className='nav-link'>History</a>
                    </li>
                    <li className="nav-item">
                        <a href="/" className='nav-link'>Sale</a>
                    </li>
                    <li className="nav-item">
                        <a href="/" className='nav-link'>Contact</a>
                    </li>

                    <li className="icons d-flex">
                        <a href="/" className='icon'>
                            <i className='bx bx-basket'></i>
                            <span className='d-flex'>10</span>
                        </a>
                    </li>
                </ul>
                <div className='mandarin'>
                    <i className="bx bx-menu-alt-left"></i>
                </div>
            </div>
        <Modal
            size='lg'
            isOpen={modal}
            toggle={()=> setmodal(!modal)}
        >
            <ModalHeader>
                <div className="body">
                    <div className="body-content">
                        <div className="body-container">
                        </div>
                    </div>
                </div>
                <div className="body">
                    <div className="right-content">
                        <h1>USEFUL DELICIOUS MANDARIN</h1>
                        <h3>Fruits perfectly preserve vitamin C with long storage. mandarin ripens in November-December. 10 winter carier a source of vitamins for those living in the northern hemisphere.</h3>
                        <h2>$ 1.56</h2>
                        <a href="#" class="btn">ADD TO CART</a>
                    </div>
                </div>
            </ModalHeader>

        </Modal>
        </div>
    )
import './first_page.css'}

export default first_page