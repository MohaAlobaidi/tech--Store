import React from 'react'
import Title from './../Title'


export default function Contact() {
    return <section className="py-5">
<div className="row">
    <div className="col-10 mx-auto col-md-6 py-3">
        <Title title="contact us"/>
        <form className="mt-5"  action="https://formspree.io/mmmmk1982@yahoo.com"
  method="POST">
            <div className="form-group">
                {/* first */}
                <input type='text' 
                        name="firstName" 
                        className="form-control" 
                        placeholder="john smith"
                />
            </div>

            <div className="form-group">
                {/* email */}
                <input type='email' 
                        name="email" 
                        className="form-control" 
                        placeholder="email@email.com"
                />
            </div>

            <div className="form-group">
                {/* subject */}
                <input type='text' 
                        name="subject" 
                        className="form-control" 
                        placeholder="important!!!!"
                />
            </div>

            <div className="form-group">
                {/* message */}
              <textarea name="message" 
                       className="form-control" row="10"
                        placeholder="hello there buddy"
              >
              </textarea>
            </div>
                
            <div className="form-group mt-3"> 
            <input type="submit" className="form-control bg-primary text-white" value="send"/>
            </div>

        </form>
    </div>
</div>
    </section>
}

