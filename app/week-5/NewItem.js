"use client"

import{ useState } from "react";

export default function NewItem() {
    const[name, setName] = useState("");
    const[quantity, setQuantity] = useState(1);
    const[category, setCategory] = useState("produce");

    function handleSubmit(e){
        e.preventDefault();
        const formData = new FormData(e.target);
        const item = {
            name,
            quantity,
            category,
        };
        console.log(item);
        alert(`Added to shopping list: ${name}, quantity: ${quantity}, category: ${category}`);
        setName("");
        setQuantity(1);
        setCategory("produce");

    };

    return(
        <form 
            className="max-w-md mx-auto bg-white shadow-lg rounded-2xl p-8 space-y-6"
            onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold text-center text-gray-700">Add New Item</h2>
            <div className="flex flex-col gap-2">
                <label className="font-semibold text-lg">Name</label>
                <input className="border-2 border-solid border-gray-400 p-2 rounded-md w-full"
                    onChange={(e) => setName(e.target.value)}
                    type="text" 
                    value={name} 
                    />
            </div>
            <div className="flex flex-col gap-2">
                <label className="font-semibold text-lg">Quantity</label>
                <input 
                    className="border-2 border-solid border-gray-400 p-2 rounded-md w-full"
                    onChange={(e) => setQuantity(e.target.value)}
                    type="number" 
                    min="1"
                    max="99"
                    value={quantity} 
                    />
            </div>
            <div className="flex flex-col gap-2">
                <label className="font-semibold text-lg">Category</label>
                <select
                    className="border-2 border-solid border-gray-400 p-2 rounded-md w-full" 
                    onChange={(e) => setCategory(e.target.value)}
                    type="text" 
                    value={category}
                    > 
                    <option value="produce">produce</option>
                    <option value="dairy">Dairy</option>
                    <option value="bakery">Bakery</option>
                    <option value="meat">Meat</option>
                    <option value="frozen foods">Frozen Foods</option>
                    <option value="canned goods">Canned Goods</option>
                    <option value="dry goods">Dry Goods</option>
                    <option value="beverages">Beverages</option>
                    <option value="snacks">Snacks</option>
                    <option value="household">Household</option>
                    <option value="other">Other</option>

                </select>
            </div>
            <button
            type="submit" 
            className="w-full p-2 mt-6 bg-violet-300 rounded-md font-semibold hover:bg-violet-400">+</button>
        </form>
    )

}