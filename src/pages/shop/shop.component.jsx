import React, { Component } from 'react';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';

import './shop.style.scss';
class Shop extends Component {
  state = {
    collections: SHOP_DATA
  }
  render() {
    return (
      <div className="shop-page">
        {
          this.state.collections.map(({ id, ...otherCollectionProps }) => {
            return <CollectionPreview key={id} {...otherCollectionProps} />
          })
        }

      </div>
    )
  }
}

export default Shop;