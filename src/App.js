import React from 'react';
import './App.css';

import Form from './components/Form';
import Dashboard from './components/Dashboard';
import Reviews from './components/Reviews';
import Store from './Store';
import {decorate, observable, action, computed} from 'mobx';

decorate(Store, {
    reviewList: observable,
    addReview: action,
    averageScore: computed,
    reviewCount: computed
});


const reviewStore = new Store();

function App() {
    return (
      <div className="container">
        <Form addReview={reviewStore.addReview}/>
        <Dashboard store={reviewStore}/>
        <Reviews reviewList={reviewStore.reviewList}/>
      </div>
    );
}

export default App;