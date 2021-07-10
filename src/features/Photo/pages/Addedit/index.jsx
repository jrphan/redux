// import Banner from 'components/Banner';
import React from 'react';
import PhotoForm from '../../components/Photoform';
import Banner from '../../../../components/Banner';
import './Addedit.scss';

AddEditPage.propTypes = {};

function AddEditPage(props) {
  return (
    <div className="photo-edit">
      <Banner title="Pick your amazing photo 😎" />

      <div className="photo-edit__form">
        <PhotoForm/>
      </div>
    </div>
  );
}

export default AddEditPage;