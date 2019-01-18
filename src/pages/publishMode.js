import React, { Component } from 'react';
import { Card } from 'antd';
const { Meta } = Card;
class PublishMode extends Component {
  render() {
    return (
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
      >
        <Meta
          title="Europe Street beat"
          description="www.instagram.com"
        />
      </Card>
    );
  }
}

export default PublishMode;