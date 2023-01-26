import React from 'react';

function AddCandyForm({addNewCandy, updateFormInfo}) {
  
    return (
      <div className="new-candy-form">
        <form className="ui form" onSubmit={addNewCandy}>
          <div className="inline fields">
            <input type="text" name="name"  onChange={updateFormInfo} />
            <input type="text" name="image" placeholder="Image URL"  onChange={updateFormInfo}/>
            <input type="text" name="type_of_candy" placeholder="Candy Type" onChange={updateFormInfo} />
            <input type="number" name="number_of_likes" placeholder="Likes" step="0" onChange={updateFormInfo} />
            <input type="number" name="number_of_dislikes" placeholder="Dislikes" step="0"  onChange={updateFormInfo}/>
          </div>
          <button className="ui button" type="submit">
            Add Candy
          </button>
        </form>
      </div>
    );
  }
  
  export default AddCandyForm;
