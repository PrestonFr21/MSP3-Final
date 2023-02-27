const React = require('react')
const Default = require('./layouts/Default')

function New () {
    return (
      <Default>
        <h2>Add a new item</h2>
        <div className="backButton">
            <a href="/items"><button>Go back to the index</button></a>
        </div>

        <form action='/items' method='POST'>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            required
          />
          <label htmlFor="image">Image</label>
          <input
            type="text"
            name="picture"
            id="picture"/>
          <label htmlFor="hasGluten">Price</label>
          <input
            type="text"
            name="price"
            id="price"
          />
          <br />
          <input type="submit"/>
         
        </form>
      </Default>
    )
}




 

module.exports = New

