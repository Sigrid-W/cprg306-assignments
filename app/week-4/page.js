import ItemList from "./item-list";

export default function Page() {
    return (
        <main>
            <h1 className="text-2xl font-bold text-green-950 mb-4 text-center">Shopping List</h1>
            <ItemList/>
        </main>
    );
}
