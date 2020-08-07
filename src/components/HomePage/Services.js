import React, { Component } from 'react'
import styled from 'styled-components';
import {FaDolly,FaRedo,FaEuroSign} from 'react-icons/fa'

class Services extends Component {

  state = {
        services:[
            {id:1,
             icon:<FaDolly/>,
             title:"free shipping",
             text:" Ad non enim duis irure sit adipisicing qui nostrud ut ipsum. Amet dolore eiusmod fugiat sit tempor. Esse duis elit fugiat excepteur nisi proident "
            },
            {
            id:2,
            icon:<FaRedo/>,
            title:"30 days return policy",
            text:" Ad non enim duis irure sit adipisicing qui nostrud ut ipsum. Amet dolore eiusmod fugiat sit tempor. Esse duis elit fugiat excepteur nisi proident "
             },
             {
                id:3,
                icon:<FaEuroSign/>,
                title:"secured payment",
                text:" Ad non enim duis irure sit adipisicing qui nostrud ut ipsum. Amet dolore eiusmod fugiat sit tempor. Esse duis elit fugiat excepteur nisi proident "
             }

        ]
    }

  render(){
    return (
        <ServicesWrapper className="py-5">
        <div className="container">
            <div className="row">
                {this.state.services.map(item=> (
                    <div className="col-10 mx-auto col-sm-6 col-md-4 text-center my-3 " key={item.id}>

                        <div className="servise-icon">
                            {item.icon}
                        </div>

                        <div className="mt-3 text-capitalize">
                            {item.title}
                        </div>
                        <div className="mt-3">
                            <p>{item.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </ServicesWrapper>
    )
  }
}
export default Services;
const ServicesWrapper = styled.section`
background:rgba(95,183,234,.4);
.servise-icon{
    font-size:2.6rem;
    color:var(--primaryColor);
}
p{
    color:var(--darkGrey)
}
`