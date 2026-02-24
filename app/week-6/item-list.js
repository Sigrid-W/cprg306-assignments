"use client"

import{ useState } from "react";
import Item from "./item";




export default function ItemList({items})
{
    const [sortBy, setSortBy] = useState("name");

    const sortedItems = [...items].sort((a, b) => {
        if(sortBy === "name") {
            if (a.name < b.name) 
                return -1;
            if (a.name > b.name)
                return 1;
            return 0; 
        }

        if (sortBy === "category") {
            if(a.category < b.category)
                return -1
            if(a.category > b.category)
                return 1;
            return 0;
        }
        return 0;
    })

    return (
        <div>
            
            <button
            onClick={() => setSortBy("name")}
            className={`
            px-4 py-2 rounded-md font-semibold transition
            ${sortBy === "name"
            ? "bg-rose-500 text-white"
            : "bg-rose-200 dark:bg-gray-700 dark:text-gray-200"}`}>
            Sort by Name
            </button>
            <button
            onClick={() => setSortBy("category")}
            className={`
            px-4 py-2 rounded-md font-semibold transition
            ${sortBy === "category"
            ? "bg-rose-500 text-white"
            : "bg-rose-200 dark:bg-gray-700 dark:text-gray-200"}`}>
            Sort by Category
            </button>
        

        <ul>
            {sortedItems.map((item) => (
            <Item
                key = {item.id}  
                name = {item.name}
                quantity = {item.quantity}
                category = {item.category}          
            />))}
        </ul>
        </div>
    );
    
}


