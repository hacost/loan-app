import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../assets/styles/components/CarouselItem.scss';
import Button from '@material-ui/core/Button';
import { addToCart, deleteProduct } from '../actions/Cart';

const CarouselItem = (props) => {
  const { id, name, category, price, cover, isList } = props;
  const handleAddToCart = () => {
    props.addToCart({
      id, name, category, price, cover,
    });
  };

  const handleDeleteProduct = (itemId) => {
    props.deleteProduct(itemId);
  };

  return (
    <div className='carousel-item'>
      <img className='carousel-item__img' src={cover} alt={name} />
      <div className='carousel-item__details'>
        <div>
          {isList ? (
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='secondary'
              onClick={() => handleDeleteProduct(id)}
            >
              -
            </Button>
          ) :
            (
              <Button
                type='submit'
                fullWidth
                variant='contained'
                color='primary'
                onClick={handleAddToCart}
              >
                +
              </Button>
            )}
          <Link to={`/player/${id}`}>
            <p>Play</p>
          </Link>

        </div>
        <p className='carousel-item__details--title'>{name}</p>
        <p className='carousel-item__details--subtitle'>
          {`${price} ${category}`}
        </p>
      </div>
    </div>
  );
};

CarouselItem.propTypes = {
  name: PropTypes.string,
  category: PropTypes.string,
  price: PropTypes.number,
  cover: PropTypes.string,
};

const mapDispatchToProps = {
  addToCart,
  deleteProduct,
};

export default connect(null, mapDispatchToProps)(CarouselItem);

