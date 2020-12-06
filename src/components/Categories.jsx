import React from 'react';
import '../assets/styles/components/Categories.scss';

const Categories = ({ children, sectionTitle }) => (

  <div className='categories'>
    <h3 className='categories__title'>{sectionTitle}</h3>
    {children}
  </div>
);

export default Categories;
