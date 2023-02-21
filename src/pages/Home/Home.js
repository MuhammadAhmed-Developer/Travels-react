import React from 'react';
import video from '../../assects/videos/animation video.mp4'

export default function Home() {
  return (
    <>
<section>
  <div className="">
  <video src={video} type='video/mp4' muted autoPlay  loop width='100%'></video>
  </div>
</section>

    <div className='mt-5 position-absolute top-0 d-flex'>
       <div className="container-fluid home-video">
           <div className="container-fluid mt-5">
             <div className="container-fluid mt-5">
                <div className="row mt-5">
                  <div className="col mt-5 text-white d-flex flex-column justify-content-center align-content-center">
                    <h5 className='mt-5'>OUR PACKAGES</h5>
                    <h1 className='fw-bold'>Search your Holiday</h1>
                    <div>
                      <form  className='bg-white py-4 px-5 rounded-2 mt-5 text-dark gx-4'>
                        <div className="row">
                          <div className="col-12 col-md-6 col-lg-4">
                          <div className="mb-3">
                         <label for="exampleFormControlInput1" className="form-label">Search your Destination</label>
                         <input type="text" className="form-control rounded-5" placeholder="Your Location" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-lg-4">
                          <div className="mb-3">
                         <label for="exampleFormControlInput1" className="form-label">Select Your date</label>
                         <input type="date" className="form-control rounded-5" id="exampleFormControlInput1" placeholder=""/>
                            </div>
                          </div>
                          <div className="col-12 col-md-6 col-lg-4">
                          <div className="mb-3">
                         <label for="exampleFormControlInput1" className="form-label">Max Price</label>
                         <input type="email" className="form-control rounded-5" id="exampleFormControlInput1" placeholder="name@example.com"/>
                            </div>
                          </div>
                        </div>
                      </form>
                      
                    </div>
                  </div>
                </div>
             </div>
           </div>
       </div>
    </div>
 
    
    </>
  )
}
