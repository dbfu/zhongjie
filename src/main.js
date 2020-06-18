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



