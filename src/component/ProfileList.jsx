import React from 'react';
import CategoryItem from './CategoryItem';
import PropTypes from 'prop-types';

const ProfileList = ({ profileList, alertDescription }) => {
  return (
    <div className="container pt-4">
      <div className="row">
        {profileList.map((category, i) => (
          <CategoryItem
            key={category.id}
            category={category}
            title={category.categoryName}
            alertDescription={alertDescription}
          >
            <img
              style={{ height: 200, objectFit: 'cover' }}
              src={category.Image}
              alt=""
              className="card-img-top"
            />
          </CategoryItem>
        ))}
      </div>
    </div>
  );
};

ProfileList.propTypes = {
  categoryList: PropTypes.array.isRequired,
  alertDescription: PropTypes.func.isRequired,
};

export default ProfileList;