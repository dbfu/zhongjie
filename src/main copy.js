// import React, { Component } from 'react';
// import { Flex, NavBar, Popover } from 'antd-mobile';

// class Main extends Component {
//   render() {
//     const width = window.screen.width;
//     return (
//       <div>
//         <NavBar
//           style={{ backgroundColor: '#6190e8' }}
//         >中介超市</NavBar>
//         <div style={{ marginTop: 10, padding: 10 }}>
//           <Flex>
//             <Flex.Item>
//               <div style={{ textAlign: 'center', border: '1px solid #ccc', position: 'relative' }}>
//                 <div style={{ height: 80, display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', }}>
//                   <Popover
//                     overlay={(
//                       <div style={{ padding: 10, maxWidth: (width / 2) - 28, textAlign: 'justify' }}>为用户提供房屋出租，出售，购买</div>
//                     )}
//                     align={{
//                       overflow: { adjustY: 0, adjustX: 0 },
//                       offset: [0, 8],
//                     }}
//                     placement="bottom"
//                   >
//                     <span>房地产中介服务</span>
//                   </Popover>
//                   <div style={{ color: '#1890ff', marginTop: 12 }} onClick={() => {
//                     const { history } = this.props;
//                     history.push('/company/list/1')
//                   }}>点击进入</div>
//                 </div>
//               </div>
//             </Flex.Item>
//             <Flex.Item>
//               <div style={{ textAlign: 'center', border: '1px solid #ccc', height: 80, display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', }}>
//                 <span>房地产中介服务</span>
//                 <div style={{ color: '#1890ff', marginTop: 12 }}>点击进入</div>
//               </div>
//             </Flex.Item>
//           </Flex>
//         </div>
//       </div>
//     );
//   }
// }

// export default Main;

import React from 'react';
import { List, NavBar } from 'antd-mobile';
import './main.less'

const Item = List.Item;
const Brief = Item.Brief;

export default function Main() {
  return (
    <div>
      <NavBar
        style={{ backgroundColor: '#6190e8' }}
      >中介超市</NavBar>
      <List renderHeader={() => '公司类别'} className="my-list">
        <Item wrap arrow="horizontal" multipleLine onClick={() => { }}>
          环保服务 <Brief wrap>为用户提供房屋出租，出售，购买等等</Brief>
        </Item>
        <Item wrap arrow="horizontal" multipleLine onClick={() => { }}>
          环保服务 <Brief wrap>为用户提供房为用户提供房屋出租，出售，购买等等</Brief>
        </Item>
      </List>
    </div>
  )
}



