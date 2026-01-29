export default function Item({ name, 
    quantity, 
    category,
}) {
    return (
        <li className="list-none bg-rose-100 px-4 py-3 mb-3 border-0 rounded-2xl max-w-md mx-auto text-center">
            <p className="text-gray-700 font-semibold">{name}</p>
            <p className="text-gray-700">Quantity: {quantity}</p>
            <p className="text-gray-700">Category: {category}</p>
        </li>
    );
}