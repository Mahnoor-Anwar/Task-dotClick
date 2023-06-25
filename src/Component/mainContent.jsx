import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Vector from './Vector 1.svg'
import Question from './Group 10.png'

function MainContent() {
    return (
    
        < >
            <p className="no-of-req">You currently have 3 requests</p>
            <div className="In-progress">
                <div className="div-1 mt-2 ms-3">
                    {/* <div className="name">
                        <div className="hospital-name">St Judes Hospital</div>
                        <div className="hospital-address">Sarasota,FL. 33178</div>
                    </div> */}
                    <Row>
                        <Col md={3}>
                        <div className="hospital-name">St Judes Hospital</div>
                        <div className="hospital-address">Sarasota,FL. 33178</div>
                        </Col>

                        <Col md={2}  className="date-n-month">
                        <div className="date">10 &nbsp;&nbsp; - &nbsp;&nbsp; 17</div>
                        <div className="month">October&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;December</div>
                        </Col>

                        <Col md={4}>
                        <div className="hospital-name">20 Rooms</div>
                        <div className="hospital-address">10&nbsp;Singles,10&nbsp;double</div>
                        </Col>
                    </Row>
                   <div className="progress-bar ms-2  me-4">
                      <Row >
                          <Col sm={4} className="recieved">RECIEVED</Col>
                          <Col sm={3} className="negotiate text-center">NEGOTIATING</Col>
                          <Col sm={4} className="completed text-center">COMPLETED</Col>
                      </Row>


                   </div>
                </div>
                
            </div>

            <div className="complete">
                <div className="div-3 mt-2 ms-4">
                    <Row>
                        
                        <Col md={3}>
                        <div className="hospital-name">St Judes Hospital</div>
                        <div className="hospital-address">Sarasota,FL. 33178</div>
                        </Col>

                        <Col md={2}  className="date-n-month">
                        <div className="date">10 &nbsp;&nbsp; - &nbsp;&nbsp; 17</div>
                        <div className="month">October&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;December</div>
                        </Col>

                        <Col md={4}>
                        <div className="hospital-name">20 Rooms</div>
                        <div className="hospital-address">10&nbsp;Singles,10&nbsp;double</div>
                        </Col>
                    </Row>
                   <div className="complete-bar col-sm-7 ms-2  me-4">
                       Completed
                     </div>
                </div>
                
                <div className="find">Rare Find</div> 

                <div className="holiday d-flex">
                    {/* <div className="find">Rare Find</div> */}
                <div className="box col-sm-3 mx-5" >
                    <div className=" d-flex justify-content-center vector-img" >
                        <img src={Vector} alt=""/>
                    </div>
                    <p className="holiday-inn">Holiday Inn</p>

                    <div className="inner-box pt-2">
                    <p className="miles mb-0">1.5 miles away from joblocation. </p>
                    <div className="d-flex justify-content-between mb-2">
                        <div className="quantity ms-2 pt-2">
                            <p className="mb-0">Singles: $120</p>
                            <p className="mb-0">Double: $145</p>
                        </div>
                        <div className="book-now-btn me-2">
                            <button className="book-now px-3 py-1">Book now</button>
                        </div>
                    </div>
                    </div>

                </div>

                <div className="box col-sm-3 mx-5" >
                    <div className=" d-flex justify-content-center vector-img" >
                        <img src={Vector} alt=""/>
                    </div>
                    <p className="holiday-inn">Holiday Inn</p>

                    <div className="inner-box pt-2">
                    <p className="miles mb-0">1.5 miles away from joblocation. </p>
                    <div className="d-flex justify-content-between mb-2">
                        <div className="quantity ms-2 pt-2">
                            <p className="mb-0">Singles: $120</p>
                            <p className="mb-0">Double: $145</p>
                        </div>
                        <div className="book-now-btn me-2">
                            <button className="book-now px-3 py-1">Book now</button>
                        </div>
                    </div>
                    </div>

                </div>

                <div className="box col-sm-3 mx-5" >
                    <div className=" d-flex justify-content-center vector-img" >
                        <img src={Vector} alt=""/>
                    </div>
                    <p className="holiday-inn">Holiday Inn</p>

                    <div className="inner-box pt-2">
                    <p className="miles mb-0">1.5 miles away from joblocation. </p>
                    <div className="d-flex justify-content-between mb-2">
                        <div className="quantity ms-2 pt-2">
                            <p className="mb-0">Singles: $120</p>
                            <p className="mb-0">Double: $145</p>
                        </div>
                        <div className="book-now-btn me-2">
                            <button className="book-now px-3 py-1">Book now</button>
                        </div>
                    </div>
                    </div>

                </div>
               
                
            </div>
                
            </div>
            
            <div className="FAQ ">
                <img src={Question} alt="" />
            </div>
          
        </>
    );
  }
  
  export default MainContent;