"use client"

import Link from "next/link";
import { useState } from "react";
import ItemList from "./GroceryItemList";
import NewItem from "./NewGroceryItem";
import itemsData from "./groceryItems.json";
import MealIdeas from "./MealIdeas";

export default function Page() {

    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState("");
    

    function handleAddItem(newItem){
    setItems(prev => [...prev, newItem]);
}

    function handleItemSelect(item){
        const newName = item.name.split(",")[0].replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '').trim();
        setSelectedItemName(newName);
    }

    return (
        <main className="p-8 bg-rose-100 dark:bg-gray-900"> 
            <div className="flex gap-8">
                <div className="flex-2">
                    <h1 className="text-3xl font-bold text-center mb-8 text-rose-700 dark:text-rose-300">Shopping List</h1>
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
