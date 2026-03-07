export default function Item({name, quantity, category})
{
    return(
    <li className="list-none bg-gray-800 dark:bg-rose-200 px-3 py-3 mb-3 mr-3 border-0 rounded-2xl inline-grid text-center w-64">
        <p className="text-white dark:text-gray-800 font-semibold">{name}</p>
        <p className="text-white dark:text-gray-800">Quantity: {quantity}</p>
        <p className="text-white dark:text-gray-800">Category: {category}</p>
    </li>
    );
}