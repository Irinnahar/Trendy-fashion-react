import React from 'react';
import './collection-preview.style.scss';
import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({ id, title, items, routeName }) => {
  return (
    <div className='collection-preview'>
      <h1 className="title">{title}</h1>
      <div className="preview">
        {
          items
            .filter((item, index) => index < 4)
            .map(({ id, ...otherItemProps }) => {
              return <CollectionItem key={id} {...otherItemProps} />
            })
        }
      </div>
    </div>
  )
}

export default CollectionPreview;