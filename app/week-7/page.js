"use client"

import Link from "next/link";
import { useState } from "react";
import ItemList from "./GroceryItemList";
import NewItem from "./NewGroceryItem";
import itemsData from "./grocery-items.json";

export default function Page() {

    const [items, setItems] = useState(itemsData)

    function handleAddItem(newItem){
        setItems([...itemsData, newItem]);
    }

    return (
        <main className="p-8 bg-rose-100 dark:bg-gray-900">
            <h1 className="text-3xl font-bold text-center mb-8 text-rose-700 dark:text-rose-300">Shopping List</h1>
            <NewItem onAddItem={handleAddItem}/>
            <ItemList items={items}/>
        </main>
    );
}
