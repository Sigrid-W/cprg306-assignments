"use client"

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUserAuth } from "../../contexts/AuthContext";
import ItemList from "./GroceryItemList";
import NewItem from "./NewGroceryItem";
import itemsData from "./groceryItems.json";
import MealIdeas from "./MealIdeas";

export default function Page() {
    const { user } = useUserAuth();
    const router = useRouter();
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState("");
    

    function handleAddItem(newItem){
    setItems(prev => [...prev, newItem]);
}

    function handleItemSelect(item){
        const newName = item.name.split(",")[0].replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '').trim();
        setSelectedItemName(newName);
    }

     if (!user) {
        return (
            <main className="min-h-screen p-8 bg-rose-100 dark:bg-gray-900 flex items-center justify-center">
                <section className="my-4 p-6 bg-stone-300 dark:bg-stone-800 rounded-lg max-w-md w-full text-center">
                    <h1 className="text-2xl font-bold mb-4">Please log in to view the shopping list.</h1>
                    <Link
                        href="/week-9"
                        className="px-4 py-2 bg-rose-400 hover:bg-rose-500 dark:bg-rose-600 dark:hover:bg-rose-500 text-white rounded"
                    >
                        Go to Login
                    </Link>
                </section>
            </main>
        );
    }

    return (
        <main className="p-8 bg-rose-100 dark:bg-gray-900">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-center text-rose-700 dark:text-rose-300">
                    Shopping List
                </h1>
                {/* Display some of the user's information */}
                <p className="text-sm text-gray-600 dark:text-gray-400">
                    Signed in as{" "}
                    <span className="font-semibold">{user.displayName}</span>
                </p>
                <Link
                    href="/week-9"
                    className="px-4 py-2 bg-stone-300 hover:bg-stone-400 dark:bg-stone-700 dark:hover:bg-stone-600 text-gray-800 dark:text-white rounded text-sm font-semibold"
                >
                    ← Back
                </Link>
            </div>
            <div className="flex gap-8">
                <div className="flex-2">
                    <NewItem onAddItem={handleAddItem}/>
                    <ItemList items={items} onItemSelect={handleItemSelect}/>
                </div>
                <div className="flex-1">
                    <MealIdeas ingredient={selectedItemName}/>
                </div>
            </div>
        </main>
    );
}
