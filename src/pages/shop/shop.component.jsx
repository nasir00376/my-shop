import React from 'react';

import CollectionPreview from '../../components/collection-preview/collection-preview'

import SHOP_DATA from './shop.data';

import './shop.styles.scss';

class Shop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div>
        {
          collections.map(({ id, ...otherCollectionProps }) => <CollectionPreview key={id} {...otherCollectionProps} />)
        }
      </div>
    );
  }
}

export default Shop;