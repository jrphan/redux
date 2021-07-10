import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, FormGroup, Input, Label } from 'reactstrap';
import Select from 'react-select';
// import PHOTO_CATEGORY_OPTIONS from '../../../../constants/global';
import { PHOTO_CATEGORY_OPTIONS }from '../../../../constants/global';
import Images from '../../../../constants/images';
import './PhotoForm.scss';

Photoform.propTypes = {
    
};

function Photoform(props) {
    return (
        <Form>
            <FormGroup className='group'>
                <Label for="titleId">Title</Label>
                <Input name="title" id="titleId" placeholder="Eg: WOw nature..."/>
            </FormGroup>

            <FormGroup className='group'> 
                <Label for="categoryId">Category</Label>
                <Select
                    id="categoryId"
                    name="categoryId"
                    placeholder="What's your photo category?"
                    options={PHOTO_CATEGORY_OPTIONS}
                />
            </FormGroup>
            <FormGroup className='group'>
                <Label for="categoryId">Photo</Label>
                <div><Button type="button" outline color="primary">Random a Photo</Button></div>
                <div>
                    <img width="200px" height="200px" src={Images.PINK_BG} alt="color"/>
                </div>
            </FormGroup>
            <FormGroup className='group'>
                <Button color="primary">Add to album</Button>
            </FormGroup>
        </Form>
    );
}

export default Photoform;