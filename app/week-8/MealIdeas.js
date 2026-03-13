"use client";

import { useState, useEffect, use } from "react";

export default function MealIdeas ({ingredient}) {
    const [meals, setMeals] = useState([]);

    async function loadMealIdeas(){
        const meals = await fetchMealIdeas(ingredient);
        setMeals(meals);
    }

    useEffect(() => {
    loadMealIdeas();
    }, [ingredient]);


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
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data.meals ?? [];
}

