import NewItem from "./NewItem"

export default function Page() {
    return (
        <main>
            <h1 className="text-3xl font-bold text-violet-800 mb-4 text-center">Shopping List</h1>
            <NewItem/>
        </main>
    );
}