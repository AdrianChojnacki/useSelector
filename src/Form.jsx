import React, { useState } from 'react';
import { connect } from 'react-redux';

import { addRate, editRate } from './actions/appActions';

const Form = ({
  addRate,
  author = '',
  callback,
  comment = '',
  editRate,
  id,
  rate = 0,
}) => {
  const [authorInput, setAuthorInput] = useState(author);
  const [rateInput, setRateInput] = useState(rate);
  const [commentInput, setCommentInput] = useState(comment);

  const handleChangeAuthor = event => setAuthorInput(event.target.value);
  const handleChangeRate = event => setRateInput(event.target.value);
  const handleChangeComment = event => setCommentInput(event.target.value);

  const handleOnSubmit = event => {
    event.preventDefault();

    // if (!authorInput.length) {
    //   return;
    // }

    const rateObject = {
      author: authorInput,
      comment: commentInput,
      id,
      rate: Number(rateInput),
    };

    id ? editRate(rateObject) : addRate(rateObject);

    if (id) {
      callback();
    }
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <div>
        <label>
          Autor:
          <input
            onChange={handleChangeAuthor}
            type="text"
            value={authorInput}
          />
        </label>
      </div>
      <div>
        <label>
          Ocena:
          <input
            onChange={handleChangeRate}
            type="number"
            value={rateInput}
          />
        </label>
      </div>
      <div>
        <label>
          Komentarz:
          <input
            onChange={handleChangeComment}
            type="text"
            value={commentInput}
          />
        </label>
      </div>
      <button type="submit">
        {id ? 'Edycja oceny' : 'Dodaj ocenę'}
      </button>
    </form>
  );
}

const connectActionsToProps = ({
  addRate,
  editRate,
});

const FormConsumer = connect(null, connectActionsToProps)(Form);

export default FormConsumer;
