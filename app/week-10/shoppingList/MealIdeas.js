"use client";

import { useState, useEffect, use } from "react";

export default function MealIdeas ({ingredient}) {
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function loadMealIdeas() {
    if (!ingredient) return;
    setLoading(true);
    const meals = await fetchMealIdeas(ingredient);
    setMeals(meals);
    setLoading(false);
}

    useEffect(() => {
    loadMealIdeas();
    }, [ingredient]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    if (!ingredient) return <p>Select an item to see meal ideas.</p>;
    if (meals.length === 0) return <p>No meals found.</p>;



    return (
    <div className="bg-white px-3 py-3 border-2 border-solid border-gray-400">
        <h2 className="text-2xl text-gray-800 font-semibold">Meal Ideas for {ingredient}</h2>
        {meals.length === 0 ? (
            <p className="mt-2 text-gray-800">No meals found.</p>
        ) : (
            <ul className="mt-2 text-gray-800 ">
                {meals.map((meal) => (
                    <li key={meal.idMeal} className="my-2 border border-solid border-gray-800 p-2 bg-rose-100">{meal.strMeal}</li>
                ))}
            </ul>
        )}
    </div>
);

}

async function fetchMealIdeas(ingredient){
    if (!ingredient) return [];
    try {
        const response = await fetch( `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        if (!response.ok) {
            throw new Error(`HTTP ERROR: Status ${response.status}`);
        }
        const data = await response.json();
        return data.meals ?? [];
    } catch (error) {
        throw error;
    }
}

