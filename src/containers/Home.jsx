import React from 'react';
import { connect } from 'react-redux';
import '../assets/styles/containers/Home.scss';


const Home = (props) => {
  const { myList, products } = props;

  return (
    <section className='item content'>
      <>
        <h1>Home</h1>
      </>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    myList: state.myList,
    products: state.products,
  };
};

export default connect(mapStateToProps, null)(Home);
