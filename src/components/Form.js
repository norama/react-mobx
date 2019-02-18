import React, {useState} from 'react';

export default function Form({ addReview }) {

    const [text, setText] = useState('');
    const [stars, setStars] = useState(1);

    const submitReview = (e) => {
        e.preventDefault();
        addReview({review: text, stars});
        setText('');
        setStars(1);
    };

    const addText = (e) => {
        setText(e.target.value);
    };

    const addStars = (e) => {
        setStars(Number(e.target.value));
    };

    return (
      <div className="formSection">
        <div className="form-group">
          <p>Submit a Review</p>
        </div>
        <form onSubmit={submitReview}>
          <div className="row">
            <div className="col-md-4">
              <div className="form-group">
                <input type="text" name="review" value={text} onChange={addText} id="review" placeholder="Write a review" className="form-control"/>
              </div>
            </div>

            <div className="col-md-4">
              <div className="form-group">
                <select name="stars" value={stars} onChange={addStars} id="stars" className="form-control">
                  <option value={1}>1 Star</option>
                  <option value={2}>2 Star</option>
                  <option value={3}>3 Star</option>
                  <option value={4}>4 Star</option>
                  <option value={5}>5 Star</option>
                </select>
              </div>
            </div>

            <div className="col-md-4">
              <div className="form-group">
                <button className="btn btn-success" type="submit">SUBMIT REVIEW</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
}