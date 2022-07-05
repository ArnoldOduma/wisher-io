import React, { Component } from 'react';
import './add-wish.css';
import plus from '../../icons/plus-outline.svg';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class AddWish extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            location: '',
            price: '',
            category: '',
            nameValid: false,
            locationValid: false,
            priceValid: false,
            categoryValid: false,
            formValid: false,
            formErrors: { name: '', location: '', price: '', category: '' },
        };
    }

    handleUserInput = (e) => {
        const name = e.target.name;
        this.setState({ [name]: e.target.value }, () => { this.validateField(name, e.target.value) });

    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let nameValid = this.state.nameValid;
        let locationValid = this.state.locationValid;
        let priceValid = this.state.priceValid;
        let categoryValid = this.state.categoryValid;

        switch (fieldName) {
            case 'name':
                nameValid = value !== '';
                fieldValidationErrors.name = nameValid ? '' : 'Name is required';
                break;
            case 'location':
                locationValid = value !== '';
                fieldValidationErrors.location = locationValid ? '' : 'Location is required';
                break;
            case 'price':
                priceValid = value !== '';
                fieldValidationErrors.price = priceValid ? '' : 'Price is required';
                break;
            case 'category':
                console.log(value);
                categoryValid = value !== '';
                fieldValidationErrors.category = categoryValid ? '' : 'Category is required';
                break;
            // case 'email':
            //     emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            //     fieldValidationErrors.email = emailValid ? '' : ' is invalid';
            //     break;
            // case 'password':
            //     passwordValid = value.length >= 6;
            //     fieldValidationErrors.password = passwordValid ? '' : ' is too short';
            //     break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            nameValid: nameValid,
            locationValid: locationValid,
            priceValid: priceValid,
            categoryValid: categoryValid
        }, this.validateForm);
    }

    validateForm() {
        console.log(this.state.formErrors);
        this.setState({ formValid: this.state.nameValid && this.state.locationValid && this.state.priceValid && this.state.categoryValid });
    }

    errorClass(error) {
        return (error?.length === 0 ? '' : 'has-error');
    }


    createNewWish = () => {
        if (!this.state.formValid) {
            toast.warn('Fill all fields to procced', {
                position: 'top-center'
            })
            return;
        }

        const db = firebase.firestore();
        console.log(this.state.name);
        db.collection('wish-lists')
            .doc(this.state.name)
            .set({
                name: this.state.name,
                location: this.state.location,
                price: this.state.price,
                category: this.state.category,
            }).then(() => {
                toast.success('Your wish was created successfully', {
                    position: 'top-center'
                })
            }).catch(error => {
                console.error("Error writing document: ", error);
                toast.error('Error creating wishlist', {
                    position: 'top-center'
                })
            });
    };


    render() {

        return (
            <div className='add-wish-cont'>
                <h4>Add to list</h4>
                <div className='add-wish-img'>
                    <p>Upload Image</p>
                    <img src={plus} alt='Home' />
                </div>
                <div>
                    <label className='add-wish-label'>What would you like ?</label>
                    <i className={`hide-error ${this.errorClass(this.state.formErrors.name)}`}>Name Is required</i>
                    <input className='add-wish-input' type='text' name='name'
                        value={this.state.name}
                        onChange={this.handleUserInput}
                        onFocus={this.handleUserInput}
                    ></input>

                    <label className='add-wish-label'>Where can one get it ?</label>
                    <i className={`hide-error ${this.errorClass(this.state.formErrors.location)}`}>Location Is required</i>
                    <input className='add-wish-input' type='text' name='location'
                        value={this.state.location}
                        onChange={this.handleUserInput}
                        onFocus={this.handleUserInput}></input>
                    <label className='add-wish-label'>Whats the approximate cost ?</label>
                    <i className={`hide-error ${this.errorClass(this.state.formErrors.price)}`}>Price Is required</i>
                    <input className='add-wish-input' type='number' name='price'
                        value={this.state.price}
                        onChange={this.handleUserInput}
                        onFocus={this.handleUserInput}></input>
                </div>
                <div className='radio-cont'>
                    <label className='add-wish-label'>Whats the category ?</label>
                    <i className={`hide-error ${this.errorClass(this.state.formErrors.category)}`}>Category Is required</i>
                    <label class="form-control">
                        <input type="radio" name="category"
                            value='RESTAURANTS'
                            onChange={this.handleUserInput}
                            onFocus={this.handleUserInput} />
                        Restaurants
                    </label>
                    <label class="form-control">
                        <input type="radio" name="category"
                            value='TRAVEL'
                            onChange={this.handleUserInput}
                            onFocus={this.handleUserInput} />
                        Travel
                    </label>
                    <label class="form-control">
                        <input type="radio" name="category"
                            value='MOVIES'
                            onChange={this.handleUserInput}
                            onFocus={this.handleUserInput} />
                        Movies
                    </label>
                    <label class="form-control">
                        <input type="radio" name="category"
                            value='SHOPPING'
                            onChange={this.handleUserInput}
                            onFocus={this.handleUserInput} />
                        Shopping
                    </label>
                </div>
                <button type='submit' className="btn btn-primary" onClick={this.createNewWish}>Add</button>

            </div>

        );
    }
}


export default AddWish;
