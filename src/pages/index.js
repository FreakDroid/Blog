import React from "react"
import Header from '../components/header';
import { Link } from 'gatsby';

export default () => (
        <div style={{color: 'purple'}}>
            <Link to='/contact'>Contact</Link>
            <Header headerText='Index' />
            <h1>Hello world!</h1>
            <p>What a world.</p>
            <img src="https://source.unsplash.com/random/400x200" alt="" />
        </div>
)


