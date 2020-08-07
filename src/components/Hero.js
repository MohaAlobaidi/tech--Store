import React  from 'react'
import styled from 'styled-components'
import mainBcg from './../images/mainBcg.jpeg'


export default function Hero({img,title,max,children}) {

    return <HeroWrapper max={max} img={img} >
         
            <div className="banner">
                <h1 className="title"> {title} </h1>
            {children}
            </div>
          </HeroWrapper>
}



const HeroWrapper = styled.div`
text-align:center;
display:flex;
justify-content:center;
align-items:center;
min-height:${props => (props.max?"100vh":"60vh")};
color:var( --mainWhite);
/* background:url(${props=>props.img}) center/cover no-repeat; */
background:linear-gradient(var( --primaryRGBA),var( --primaryRGBA)), url(${props=>props.img}) center/cover no-repeat;

.title{
    padding-top:2rem;
    font-size:3.5rem;
text-shadow: 5px 4px 2px rgba(0, 0, 0, .4);
text-transform:capitalize;
letter-spacing:var( --mainSpacing)
}
`
Hero.defaultProps={
img:mainBcg
}