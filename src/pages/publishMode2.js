import React, { Component } from 'react';
import { Card, Comment, Avatar } from 'antd';
import '../assets/css/publishMode.scss';
const { Meta } = Card;
const bgmOne = require('../assets/images/bgm1.png');
const bgmTwo = require('../assets/images/bgm2.png');
const drawing = require('../assets/images/drawing.png');
const titleOne = 'Instant Quote – CNC Parts';
const titleMsgOne = 'Only support CNC Machining components with 3D Drawings';
const publishMode = [
  {
    titleImg: require('../assets/images/bgm1.png'),
    title: 'Instant Quote – CNC Parts',
    titleMsg: 'Only support CNC Machining components with 3D Drawings',
    content: [
      {
        img: require('../assets/images/upload.png'),
        title: 'Upload 3D CNC Machining Drawings',
      },
      {
        img: require('../assets/images/metrail.png'),
        title: 'Customized your preffered Materials or Tolerance',
      },
      {
        img: require('../assets/images/commit.png'),
        title: 'Received Instant Quotes and Submit your Order online',
      },
      {
        img: require('../assets/images/findpregress.png'),
        title: 'Track your Orders with Haizol Order Monitoring System',
      },
    ]
  },
  {
    titleImg: require('../assets/images/bgm2.png'),
    title: 'One Stop Sourcing Solutions',
    titleMsg: 'CNC Machining, Sheet Metal Fabrication, Stamping, Injection Molding, Casting..and more',
    content: [
      {
        img: require('../assets/images/demand.png'),
        title: 'Submit an Online RFQs',
      },
      {
        img: require('../assets/images/quick.png'),
        title: 'Received Quotes from our engineering experts',
      },
      {
        img: require('../assets/images/btn.png'),
        title: 'Place Order Online',
      },
      {
        img: require('../assets/images/ontime.png'),
        title: 'On-time Delivery by HAIZOL',
      },
    ]
  }
]

function titleHeaderStyle(bgm) {
  return {
    width: '100%',
    height: '95px',
    backgroundImage: `url(${bgm})`,
    backgroundSize: '100% 100%',
  };
}


function titleEle() {
  return (
    <div className="contentStyle">
      <Comment
        avatar={(
          <Avatar
            src={require('../assets/images/upload.png')}
            alt="Han Solo"
          />
        )}
        content={(
          <p>{titleMsgOne}</p>
        )}
      />
    </div>
  )
}
class PublishMode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      publishMode,
    }
  }
  TitleHeader = (titleImg, title, titleMsg) => {
    return (
      <div style={titleHeaderStyle(bgmOne)}>
        <div className="title_header">
          <Comment
            avatar={(
              <Avatar
                src={titleImg}
                alt="Han Solo"
              />
            )}
            content={(
              <div>
                <p className="title">{title}</p>
                <p className="title_msg">{titleMsg}</p>
              </div>
            )}
          />
        </div>
      </div>
    )
  }

  render() {
    // const {publishMode} = this.state;
    // return (
    //   <div key="amache" className="publishMode animated fadeInLeftBig">
    //     {
    //       publishMode.map((fitem, fins)=> {
    //         return (
    //           <Card
    //             hoverable
    //             style={{ width: 360, borderRadius: 10 }}
    //             cover={this.TitleHeader(fitem.titleImg, fitem.title, fitem.titleMsg)}
    //           >
    //           <Meta
    //             description={titleEle()}
    //           />
    //         )
    //       })
    //     }
    //     </Card>
    //   </div>
    // );
  }
}

export default PublishMode;