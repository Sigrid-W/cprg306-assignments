"use client"

import{ useState } from "react";
import Item from "./Groceryitem";


export default function ItemList({items})
{
    const [sortBy, setSortBy] = useState("name");

    const SORT_FIELDS = ["name", "category"];

    const sortedItems = [...items]
        .sort((a, b) => a[sortBy].localeCompare(b[sortBy]));

     return (
        <div>
            {SORT_FIELDS.map((field) => (
                <button
                    key={field}
                    onClick={() => setSortBy(field)}
                    className={`px-4 py-2 rounded-md font-semibold transition
                        ${sortBy === field
                        ? "bg-rose-500 text-white"
                        : "bg-rose-200 dark:bg-gray-700 dark:text-gray-200"}`}>
                    Sort by {field.charAt(0).toUpperCase() + field.slice(1)}
                </button>
            ))}

            <ul>
                {sortedItems.map((item) => (
                    <Item
                        key={item.id}
                        name={item.name}
                        quantity={item.quantity}
                        category={item.category}
                    />
                ))}
            </ul>
        </div>
    );
}


