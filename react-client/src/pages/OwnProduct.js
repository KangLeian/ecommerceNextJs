import React from 'react';

export default () => {
    

    return(
        <div>
            <form>
                <label>name</label>
                <input type="text"/><br/>
                <label>amount</label>
                <input type="number"/><br/>
                <label>price</label>
                <input type="number"/><br/>
                <label>picture</label>
                <input type="file"/>
                <button>Add</button>
            </form>
        </div>
    )
}