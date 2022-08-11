import React from 'react';
import './home.css';
import {isLoaded, useFirebaseConnect} from "react-redux-firebase";
import {useSelector} from "react-redux";

function Home() {

    const uid = useSelector((state) => state.firebase.auth);

    const name = uid?.displayName;
    console.log(name)

    let wishList = [];
    let wishListTravel = [];
    let wishListShopping = [];
    let wishListMovies = [];

    useFirebaseConnect([
        {path: `users/${uid.uid}/wish-lists`, queryParams: ['orderByKey']}
    ])

    const todos = useSelector((state) => state.firebase.ordered?.users)

    if (uid.isLoaded && todos) {
        // wishList = ;
        filterWishList(todos[uid.uid]['wish-lists'])
    }

    function WishItem(props) {
        const key = props.value.key;
        const item = props.value.value;
        return (
            <div className='home-list-item' key={key}>
                <div className='list-img-cont' style={{backgroundImage: `url('${item.image}')`}}></div>
                <p>{item.name}</p>
            </div>
        )
    }

    function filterWishList(array) {
        if (!array) return;
        for (let i = 0; i < array.length; i++) {
            if (array[i].value.category === 'TRAVEL') {
                wishListTravel.push(array[i]);
            }else if (array[i].value.category === 'SHOPPING') {
                        wishListShopping.push(array[i]);
            }else if (array[i].value.category === 'MOVIES') {
                wishListMovies.push(array[i]);
            }else {
                wishList.push(array[i]);
            }
        }
    }


    return (
        <section className='home-sec'>
            <h3>Welcome <span>{name} !</span></h3>

            <h4>My Wish Lists</h4>
            <div className='list-sec'>
                <h5>Restaurants <span>View All</span></h5>
                <div>
                    {
                        !isLoaded(todos)
                            ? <div className='home-list-item'>
                                <div className='list-img-cont'></div>
                                <p>Loading ...</p>
                            </div>
                            : wishList.map(res =>
                                <WishItem value={res}/>
                            )
                    }
                </div>
            </div>

            <div className='list-sec'>
                <h5>Travel <span>View All</span></h5>
                <div>
                    {
                        !isLoaded(todos)
                            ? <div className='home-list-item'>
                                <div className='list-img-cont'></div>
                                <p>Loading ...</p>
                            </div>
                            : wishListTravel.map(res =>
                                <WishItem value={res}/>
                            )
                    }
                </div>
            </div>

            <div className='list-sec'>
                <h5>Shopping <span>View All</span></h5>
                <div>
                    {
                        !isLoaded(todos)
                            ? <div className='home-list-item'>
                                <div className='list-img-cont'></div>
                                <p>Loading ...</p>
                            </div>
                            : wishListShopping.map(res =>
                                <WishItem value={res}/>
                            )
                    }
                </div>
            </div>
            <div className='list-sec'>
                <h5>Movies <span>View All</span></h5>
                <div>
                    {
                        !isLoaded(todos)
                            ? <div className='home-list-item'>
                                <div className='list-img-cont'></div>
                                <p>Loading ...</p>
                            </div>
                            : wishListMovies.map(res =>
                                <WishItem value={res}/>
                            )
                    }
                </div>
            </div>
        </section>

    );
}

export default Home;
