import plus from "../../icons/plus-outline.svg";
import React, {useState} from "react";
import './add-wish.css';
import {toast} from "react-toastify";
import {useFirebase} from "react-redux-firebase";
import {useSelector} from "react-redux";

const NewWish = () => {
    const firebaseDB = useFirebase();
    const uid = useSelector((state) => state.firebase.auth);

    const [state, setState] = useState({
        name: '',
        location: '',
        price: '',
        category: '',
        image: '',
        imageFile: '',
        imageDownloadURL: '',
        nameValid: false,
        locationValid: false,
        priceValid: false,
        categoryValid: false,
        formValid: false,
        formErrors: {name: '', location: '', price: '', category: ''},
    });

    const handleUserInput = (e) => {
        const {name, value} = e.target;
        setState({
            ...state,
            [name]: value,
        });
        // validateField(name, value)
    }

    const handleImage = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file)
        reader.onloadend = function (e) {
            setState({
                ...state,
                image: reader.result,
                imageFile: file
            });
        };
        console.log(file.name)
    }

    const removeImage = () => {
        setState({
            ...state,
            image: ''
        })
    }

    const storageRef = firebaseDB.storage().ref(`files/${uid.uid}${Date.now()}`);


    // function validateField(fieldName, value) {
    //     let fieldValidationErrors = state.formErrors;
    //     let nameValid = state.nameValid;
    //     let locationValid = state.locationValid;
    //     let priceValid = state.priceValid;
    //     let categoryValid = state.categoryValid;
    //
    //     switch (fieldName) {
    //         case 'name':
    //             nameValid = value !== '';
    //             fieldValidationErrors.name = nameValid ? '' : 'Name is required';
    //             break;
    //         case 'location':
    //             locationValid = value !== '';
    //             fieldValidationErrors.location = locationValid ? '' : 'Location is required';
    //             break;
    //         case 'price':
    //             priceValid = value !== '';
    //             fieldValidationErrors.price = priceValid ? '' : 'Price is required';
    //             break;
    //         case 'category':
    //             console.log(value);
    //             categoryValid = value !== '';
    //             fieldValidationErrors.category = categoryValid ? '' : 'Category is required';
    //             break;
    //         // case 'email':
    //         //     emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    //         //     fieldValidationErrors.email = emailValid ? '' : ' is invalid';
    //         //     break;
    //         // case 'password':
    //         //     passwordValid = value.length >= 6;
    //         //     fieldValidationErrors.password = passwordValid ? '' : ' is too short';
    //         //     break;
    //         default:
    //             break;
    //     }
    //
    //     setState({
    //         ...state,
    //         formErrors: fieldValidationErrors,
    //         nameValid: nameValid,
    //         locationValid: locationValid,
    //         priceValid: priceValid,
    //         categoryValid: categoryValid
    //     });
    //     validateForm();
    // }

    // function validateForm() {
    //     console.log(state.formErrors);
    //     setState({
    //         ...state, formValid: state.nameValid && state.locationValid && state.priceValid && state.categoryValid
    //     });
    // }

    function errorClass(error) {
        return (error?.length === 0 ? '' : 'has-error');
    }


    async function createNewWish() {
        if (state.formValid) {
            toast.warn('Fill all fields to proceed', {
                position: 'top-center'
            })
            return;
        }

        await storageRef.put(state.imageFile).then();
        await storageRef.getDownloadURL()
            .then(res => {
                firebaseDB.ref('users/' + uid.uid + '/wish-lists')
                    .push({
                        name: state.name,
                        location: state.location,
                        price: state.price,
                        category: state.category,
                        image: res
                    })
                    .then((docRef) => {
                        console.log(docRef)
                        // firebaseStorage.ref('users/' + uid.uid + '/wish-lists'/)
                        toast.success('Wish was created')
                    })
                    .catch(() => {
                        toast.error('Error creating wishlist', {
                            position: 'top-center'
                        })
                    });
            })


    }


    return (
        <div className='add-wish-cont'>
            <h4>Add to list</h4>
            <div>
                <label className='add-wish-label'>What would you like ?</label>
                <i className={`hide-error ${errorClass(state.formErrors.name)}`}>Name Is required</i>
                <input className='add-wish-input' type='text' name='name'
                       value={state.name}
                       onChange={handleUserInput}
                ></input>

                <label className='add-wish-label'>Where can one get it ?</label>
                <i className={`hide-error ${errorClass(state.formErrors.location)}`}>Location Is
                    required</i>
                <input className='add-wish-input' type='text' name='location'
                       value={state.location}
                       onChange={handleUserInput}
                       onFocus={handleUserInput}></input>
                <label className='add-wish-label'>Whats the approximate cost ?</label>
                <i className={`hide-error ${errorClass(state.formErrors.price)}`}>Price Is required</i>
                <input className='add-wish-input' type='number' name='price'
                       value={state.price}
                       onChange={handleUserInput}
                       onFocus={handleUserInput}></input>
            </div>
            <div className='radio-cont'>
                <label className='add-wish-label'>Whats the category ?</label>
                <i className={`hide-error ${errorClass(state.formErrors.category)}`}>Category Is
                    required</i>
                <label className="form-control">
                    <input type="radio" name="category"
                           value='RESTAURANTS'
                           onChange={handleUserInput}
                           onFocus={handleUserInput}/>
                    Restaurants
                </label>
                <label className="form-control">
                    <input type="radio" name="category"
                           value='TRAVEL'
                           onChange={handleUserInput}
                           onFocus={handleUserInput}/>
                    Travel
                </label>
                <label className="form-control">
                    <input type="radio" name="category"
                           value='MOVIES'
                           onChange={handleUserInput}
                           onFocus={handleUserInput}/>
                    Movies
                </label>
                <label className="form-control">
                    <input type="radio" name="category"
                           value='SHOPPING'
                           onChange={handleUserInput}
                           onFocus={handleUserInput}/>
                    Shopping
                </label>
            </div>

            <div className={`add-wish-img ${state.image ? 'hidden': ''}`}>
                <p>Upload Image</p>
                <label htmlFor='upload'>
                    <img src={plus} alt='Home'/>
                </label>
                <input id='upload' name='image' type='file' accept='image/*' onChange={handleImage}/>
            </div>
            <div className={`add-wish-img img-preview ${state.image ? '' : 'hidden'}`}>
                <img src={state.image} alt='Home'/>
                <button onClick={removeImage}>Remove</button>
            </div>

            <button type='submit' className="btn btn-primary" onClick={createNewWish}>Add</button>

        </div>

    );
}

export default NewWish;