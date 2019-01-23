import projectList from '../pages/myProject/projectList';
import projectNewList from '../pages/myProject/projectNewList';
import receiveQuoteList from '../pages/myProject/receiveQuoteList';
import pendingPaymentList from '../pages/myProject/pendingPaymentList';
import pendingReceiveList from '../pages/myProject/pendingReceiveList';
import projectReceiveList from '../pages/myProject/projectReceiveList';
import tailedPaymentList from '../pages/myProject/tailedPaymentList';
import projectCompleteList from '../pages/myProject/projectCompleteList';

const ROUTES = [
  {
    label: '全部项目',
    link: '/myProject/projectAllList',
    component: projectList,
    key: '/myProject/projectAllList',
  },
  {
    label: '新询价项目',
    link: '/myProject/projectNewList',
    component: projectNewList,
    key: '/myProject/projectNewList',
  },
  {
    label: '收到报价',
    link: '/myProject/receiveQuoteList',
    component: receiveQuoteList,
    key: '/myProject/receiveQuoteList',
  },
  {
    label: '待付款',
    link: '/myProject/pendingPaymentList',
    component: pendingPaymentList,
    key: '/myProject/pendingPaymentList',
  },
  {
    label: '待收货',
    link: '/myProject/pendingReceiveList',
    component: pendingReceiveList,
    key: '/myProject/pendingReceiveList',
  },
  {
    label: '已收货',
    link: '/myProject/projectReceiveList',
    component: projectReceiveList,
    key: '/myProject/projectReceiveList',
  },
  {
    label: '待付尾款',
    link: '/myProject/tailedPaymentList',
    component: tailedPaymentList,
    key: '/myProject/tailedPaymentList',
  },
  {
    label: '已完成',
    link: '/myProject/projectCompleteList',
    component: projectCompleteList,
    key: '/myProject/projectCompleteList',
  },
];

export { ROUTES };