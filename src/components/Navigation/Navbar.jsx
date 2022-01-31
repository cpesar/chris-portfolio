// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = ({toggle}) => {
//   return (
//     <nav className='flex justify-between items-center h-16 text-black relative shadow-sm font-mono'
//     role='navigation'
//     >
//       <Link to='/' exact className='pl-8'>
//         Chris Pesar
//       </Link>
//       <div className="pl-4 cursor-pointer md:hidden"
//       onClick={toggle}>
//         <svg className="w-6 h-6" fill="none"
//           stroke="currentColor" viewBox="0 0 24 24"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//         <path
//           strokeLinecap="round" strokeLinejoin="round"
//           strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"
//           />
//         </svg>
//       </div>
//       <div className="pr-8 md:block hidden">

//       <Link className="p-4" to='/' exact>
//         Home
//       </Link>
//       <Link className="p-4" to='/about'>
//         About
//       </Link>
//       <Link className="p-4" to='/projects'>
//         Projects
//       </Link>
//       <Link className="p-4" to='/resume'>
//         Resume
//       </Link>
//       <Link className="p-4" to='/contact'>
//         Contact
//       </Link>
//       </div>
//     </nav>

//   )
// }

// export default Navbar

// ----------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------

import React from 'react';

// import { Menu } from 'antd';
// import {
//   MailOutlined,
//   AppstoreOutlined,
//   SettingOutlined,
// } from '@ant-design/icons';

// const { SubMenu } = Menu;

const NavBar = () => {
  return <div>This is the NavBar</div>;
};

export default NavBar;

// import React from 'react';
// import ReactDOM from 'react-dom';
// import 'antd/dist/antd.css';
// import './index.css';
// import { Menu } from 'antd';
// import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

// const { SubMenu } = Menu;

// class App extends React.Component {
//   state = {
//     current: 'mail',
//   };

//   handleClick = e => {
//     console.log('click ', e);
//     this.setState({ current: e.key });
//   };

//   render() {
//     const { current } = this.state;
//     return (
//       <Menu onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
//         <Menu.Item key="mail" icon={<MailOutlined />}>
//           Navigation One
//         </Menu.Item>
//         <Menu.Item key="app" disabled icon={<AppstoreOutlined />}>
//           Navigation Two
//         </Menu.Item>
//         <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Navigation Three - Submenu">
//           <Menu.ItemGroup title="Item 1">
//             <Menu.Item key="setting:1">Option 1</Menu.Item>
//             <Menu.Item key="setting:2">Option 2</Menu.Item>
//           </Menu.ItemGroup>
//           <Menu.ItemGroup title="Item 2">
//             <Menu.Item key="setting:3">Option 3</Menu.Item>
//             <Menu.Item key="setting:4">Option 4</Menu.Item>
//           </Menu.ItemGroup>
//         </SubMenu>
//         <Menu.Item key="alipay">
//           <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
//             Navigation Four - Link
//           </a>
//         </Menu.Item>
//       </Menu>
//     );
//   }
// }

// ReactDOM.render(<App />, document.getElementById('container'));
