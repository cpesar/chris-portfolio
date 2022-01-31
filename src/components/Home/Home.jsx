// import React from 'react';
// import { useEffect, useRef } from 'react';

// import { Link } from 'react-router-dom';

// import { init } from 'ityped';

// import { Layout, Row, Col } from 'antd';
// const { Header, Content } = Layout;

// const Home = () => {
//   const textRef = useRef();

//   useEffect(() => {
//     init(textRef.current, {
//       showCursor: true,
//       backDelay: 1500,
//       backSpeed: 60,
//       strings: [
//         ' Developer',
//         ' Student',
//         ' Snowboarder',
//         ' Surfer',
//         ' Wanderer',
//         ' Friend',
//         ' Human',
//       ],
//     });
//   });

//   return (
//     <>
//       <Header className='Home'>
//         <Content className='overlay flex flex-col items-center justify-center text-white px-5'>
//           <Row>
//             <Col className='text-5xl font-mono text-right mb-10 lg:text-center lg:text-7xl lg:px-56'>
//               Hi! I'm Chris
//               <span className='text-blue-500' ref={textRef}>
//                 {' '}
//               </span>
//             </Col>

//             <Col>
//               <Link
//                 to='/contact'
//                 className='mr-5 bg-blue-500 py-2 px-4 rounded-full font-mono hover:bg-blue-800'
//               >
//                 Contact
//               </Link>

//               <Link
//                 to='/projects'
//                 className='mr-5 bg-white text-blue-500 py-2 px-4 rounded-full font-mono hover:bg-blue-800 hover:text-white'
//               >
//                 Projects
//               </Link>
//             </Col>
//           </Row>
//         </Content>
//       </Header>
//     </>
//   );
// };

// export default Home;

// ----------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------

import React from 'react';

import { Layout } from 'antd';
const { Header, Content, Footer } = Layout;

const Home = () => {
  return (
    <>
      <Layout>
        <Header />
        <Content />
        <Footer />
      </Layout>
    </>
  );
};

export default Home;
