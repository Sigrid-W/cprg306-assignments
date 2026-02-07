export default function Item({name, quantity, category})
{
    return(
    <li className="list-none bg-green-900 px-3 py-3 mb-3 mr-3 border-0 rounded-2xl inline-grid text-center w-64">
        <p className="text-white font-semibold">{name}</p>
        <p className="text-white">Quantity: {quantity}</p>
        <p className="text-white">Category: {category}</p>
    </li>
    );
}