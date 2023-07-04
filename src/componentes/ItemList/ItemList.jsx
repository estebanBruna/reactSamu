/* eslint-disable react/prop-types */
import Item from "../Item/Item"

const ItemList = ({productos}) => {
  return (
    <div>
        {productos.map(prod => <Item key={prod.id}{...prod} />)}
    </div>
  )
}

export default ItemList