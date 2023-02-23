const React = require('react')
const Default = require('./layouts/default')


function Index ({items})  {
    return (
        <Default>
        <h2>Index Page</h2>
        <div className="newButton">
            <a href="/items/new"><button>Add a new item</button></a>
        </div>
        {/* <ul>
        {
            items.map((item, index)=> {
                return (
                    <li key={index}>
                        <a href={`/items/${item.id}`}>
                            {item.name}
                        </a>

                    </li>
                )
            })
        }
        </ul> */}
      </Default>
    )
}



module.exports = Index
