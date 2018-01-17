import React from 'react';

class StorePicker extends React.Component {
// comments either go outside of the return...
  render() {
    return (
      <form className="store-collector">
      {/* .. or inside of the parent in the return */}
        <h2>Please Enter A Store</h2>
        <input type="text" required placeholder="Store Name" />
        <button type="submit">Visit Store -></button>
      </form>
      
      )
  }
}

export default StorePicker;