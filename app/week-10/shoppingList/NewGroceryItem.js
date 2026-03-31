"use client"

import{ useState } from "react";


export default function NewItem({ onAddItem }) {
    const categories = ["produce", "dairy", "bakery", "meat", "canned goods", "dry goods", "household"];

    const[name, setName] = useState("");
    const[quantity, setQuantity] = useState(1);
    const[category, setCategory] = useState("produce");

    function handleSubmit(e){
        e.preventDefault();
        const item = {
            name,
            quantity: parseInt(quantity),
            category,
        };
        onAddItem(item);
        setName("");
        setQuantity(1);
        setCategory("produce");

    };

    return(
        <form 
            className="max-w-md mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-8 space-y-6"
            onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold text-center text-gray-700 dark:text-white">Add New Item</h2>
            <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-semibold text-lg">Name</label>
                <input className="border-2 border-solid border-gray-400 p-2 rounded-md w-full"
                    id="name"
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                    type="text" 
                    value={name}
                    required 
                    />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="quantity" className="font-semibold text-lg">Quantity</label>
                <input 
                    className="border-2 border-solid border-gray-400 p-2 rounded-md w-full"
                    id="quantity"
                    name="quantity"
                    onChange={(e) => setQuantity(e.target.value)}
                    type="number" 
                    min="1"
                    max="99"
                    value={quantity}
                    />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="category" className="font-semibold text-lg">Category</label>
                <select
                    id="category"
                    name="category"
                    className="border-2 border-solid border-gray-400 p-2 rounded-md w-full dark:bg-gray-800" 
                    onChange={(e) => setCategory(e.target.value)}
                    type="text" 
                    value={category}
                    > 
                    {categories.map((category) => (
                        <option key={category} value={category}>
                         {category}
                     </option>
                ))}

                </select>
            </div>
            <button
            type="submit" 
            className="w-full text-white p-2 mt-6 bg-rose-400  rounded-md font-semibold hover:bg-rose-500 dark:bg-rose-600 dark:hover:bg-rose-500">+</button>
        </form>
    )

}