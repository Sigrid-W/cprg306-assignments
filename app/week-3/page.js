import Item from './GroceryItem';
import GroceryItemList from './GroceryItemList';
import groceryItems from './GroceryItemList';

export default function Page() {
    return (
        <main>
            <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">Shopping List</h1>
            <GroceryItemList/>
        </main>
    );
}
