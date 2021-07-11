import React from 'react';
import PropTypes from 'prop-types';
import { Button, FormGroup, Input, Label } from 'reactstrap';
import Select from 'react-select';
import { PHOTO_CATEGORY_OPTIONS }from '../../../../constants/global';
import Images from '../../../../constants/images';
import './PhotoForm.scss';
import { FastField, Form, Formik } from 'formik';
import InputField from 'custom-fields/InputField';
import SelectField from 'custom-fields/SelectField';

Photoform.propTypes = {
    
};

function Photoform(props) {
    const initialValues = {
        title: null,
        categoryId: null,
    };

    return (
        <Formik
            initialValues={initialValues}
        >
            {formikProps => {
                const { values, errors, touched } = formikProps;
                console.log({ values, errors, touched });

                return (
                    <Form>
                        <FastField
                            name="title"
                            component={InputField}

                            label="Title"
                            placeholder="Eg: Wow nature ..."
                        />

                        <FastField
                            name="categoryId"
                            component={SelectField}

                            label="Category"
                            placeholder="What's your photo category?"
                            options={PHOTO_CATEGORY_OPTIONS}
                        />

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
                )
            }}
        </Formik>
    );
}

export default Photoform;