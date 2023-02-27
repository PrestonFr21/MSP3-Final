const React = require('react')
const Default = require('./layouts/Default')

function Show ({item, id}) {
  
    return (
      <Default>
        <h2>Show Page</h2>
        <h3>{item.name}</h3>
        <h3>{item.price}</h3>
        <img src={item.picture} alt={item.name}/>
          <form action={`/breads/${bread.id}?_method=DELETE`} method="POST">
              <input type='submit' value="DELETE"/>
          </form>

        <li><a href="/items">Go to main page</a></li>
      </Default>
    )
}

module.exports = Show
