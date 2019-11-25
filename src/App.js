import React from 'react';
import ImageOne from './img/card-one.jpg';
import Imagetwo from './img/card-two.jpg';
import { Row, Col } from 'antd';
import CustomCard from './Card';

function App() {
  return (
    <div className="App">
      <Row type="flex" justify="center">
          <h1 className="title">Custom Cards</h1>
      </Row>
      <Row type="flex" justify="center">
        <Col className="gutter-row" md={{ span: 20 }} lg={{ span: 8 }}>
          <div className="gutter-box">
            <CustomCard image={ImageOne}/>
          </div>
        </Col>
        <Col className="gutter-row" sm={{ span: 20 }} md={{ span: 20 }} lg={{ span: 1 }}></Col>
        <Col className="gutter-row" md={{ span: 20 }} lg={{ span: 8 }}>
          <div className="gutter-box">
            <CustomCard image={Imagetwo}/>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default App;
