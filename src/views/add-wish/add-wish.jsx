import React from 'react';
import './add-wish.css';
import plus from '../../icons/plus-outline.svg';



function AddWish() {
    return (
        <div className='add-wish-cont'>
            <h4>Add to list</h4>
            <div className='add-wish-img'>
                <p>Upload Image</p>
                <img src={plus} alt='Home' />
            </div>
            <div>
                <label className='add-wish-label'>What would you like ?</label>
                <input className='add-wish-input' type='text'></input>
                <label className='add-wish-label'>Where can one get it ?</label>
                <input className='add-wish-input' type='text'></input>
                <label className='add-wish-label'>Whats the approximate cost ?</label>
                <input className='add-wish-input' type='number'></input>
            </div>
            <div className='radio-cont'>
                <label className='add-wish-label'>Whats the category ?</label>
                <label class="form-control">
                    <input type="radio" name="radio" />
                    Restaurants
                </label>
                <label class="form-control">
                    <input type="radio" name="radio" />
                    Travel
                </label>
                <label class="form-control">
                    <input type="radio" name="radio" />
                    Movies
                </label>
                <label class="form-control">
                    <input type="radio" name="radio" />
                    Shopping
                </label>
            </div>
            <button type='submit' className="btn btn-primary">Add</button>

        </div>
    );
}

export default AddWish;
