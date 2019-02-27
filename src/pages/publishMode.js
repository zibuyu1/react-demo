import React, { Component } from 'react';
import { FormattedMessage  } from 'react-intl';
import { Card, Comment, Avatar, Button, Icon } from 'antd';
import {
  NavLink,
} from 'react-router-dom';
import '../assets/css/publishMode.scss';
const { Meta } = Card;
// const name = 'Tom';
const publishMode = [
  {
    animate: 'animated fadeInLeftBig',
    btn: <FormattedMessage id='btnOne' />,
    src: '/getQuote',
    flag: true,
    titleImg: require('../assets/images/drawing.png'),
    bgm: require('../assets/images/bgm1.png'),
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
    animate: 'animated fadeInRightBig',
    btn: <FormattedMessage id='btnTwo' />,
    src: '/getQuote',
    flag: false,
    titleImg: require('../assets/images/publish.png'),
    bgm: require('../assets/images/bgm2.png'),
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
];
function titleHeaderStyle(bgm) {
  return {
    width: '100%',
    height: '95px',
    backgroundImage: `url(${bgm})`,
    backgroundSize: '100% 100%',
  };
}
function titleEle(content) {
  return (
    <div className="contentStyle">
      {
        content.map((sitem, sins) => {
          const htmlStr = (<Comment
            key={sins}
            avatar={(
              <Avatar
                src={sitem.img}
                alt="Han Solo"
              />
            )}
            content={(
              <p>{sitem.title}</p>
            )}
          />)
          return htmlStr;
        })
      }
      
    </div>
  )
}
function TitleHeader(fitem) {
  return (
    <div style={titleHeaderStyle(fitem.bgm)}>
      <div className="title_header">
        <Comment
          avatar={(
            <Avatar
              src={fitem.titleImg}
              alt="Han Solo"
            />
          )}
          content={(
            <div>
              <p className="title">{fitem.title}</p>
              <p className="title_msg">{fitem.titleMsg}</p>
              {/* <p className="title_msg">
                <FormattedMessage
                id='superHello'
                description='say hello to Howard.'
                defaultMessage='Hello, {someone}'
                values={{someone: <b>{name}</b>,}} />
              </p> */}
            </div>
          )}
        />
      </div>
    </div>
  )
}

class PublishMode extends Component {
  render() {
    return (
      <div key="amache" className="publishMode clearfix">
        {
          publishMode.map((fitem, fins) => {
            const htmlStr = (<div key={fins} className={`mode clearfix ${fitem.animate}`} >
              <Card
                hoverable
                style={{ width: 360, borderRadius: 10 }}
                cover={TitleHeader(fitem)}
              >
                <Meta
                  description={titleEle(fitem.content)}
                />
                <div className="btn">
                  <NavLink to={fitem.src}>
                    <Button type="primary">{fitem.btn}</Button>
                  </NavLink>
                  {
                    fitem.flag
                    ? <p className="watchVideo">Watch Video<Icon type="caret-right" /></p>
                    : <p className="watchVideo"></p>
                  }
                </div>
              </Card>
            </div>)
            return htmlStr;
          })
        }
      </div>
    );
  }
}

export default PublishMode;