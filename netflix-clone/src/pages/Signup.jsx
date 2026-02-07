import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import BackgroundImages from '../components/BackgroundImages';
export default function signup() {
  return (<Container>
    <BackgroundImages />
    <div className="content">
    <Header login />
    <div className='body flex column a-centre j-center'>
        <div className="text flex-column">
            <h1>Unlimited Movies, Tv shows and more </h1>
            <h4>Watch anywhere. Cancle anytime.</h4>
            <h6>Ready to watch? Enter your email or restart your membership</h6>
        </div>
        <div className="form">
            <input type="email" placeholder='Email Address' name='email' />
            <input type="password" placeholder='Password' name='password' />
            <button>Get Started</button>
        </div>
        </div>
        <button> Log In</button>
        
    </div>
    </Container>
)
}

const Container=styled.div`
position: relative;
.content{
position: absolute;
top: 0;
left: 0;
background-color: rgba(0,0,0,0.5)
height:100vh;
width:100vw;
display:grid;
grid-template-rows:15vh 85vh; 
}
`; 