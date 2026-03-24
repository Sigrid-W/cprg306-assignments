"use client";
import { useState } from "react";
import Link from "next/link";

// Import the useUserAuth hook
import { useUserAuth } from "../contexts/AuthContext";


export default function LandingPage() {
    // Use the useUserAuth hook to get the user object and the login and logout functions
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Sign in to Firebase with GitHub authentication
   const handleSignIn = async () => {
    setError(null);
    setLoading(true);
    try {
      await gitHubSignIn();
    } catch (err) {
      setError("Failed to sign in. Please try again.");
    }
    setLoading(false);
  };


// Sign out of Firebase
  const handleSignOut = async () => {
    setError(null);
    setLoading(true);
    try {
      await firebaseSignOut();
    } catch (err) {
      setError("Failed to sign out. Please try again.");
    }
    setLoading(false);
  };
 
// Display some of the user's information
 return (
    <main className="min-h-screen p-8 bg-rose-100 dark:bg-gray-900 flex items-center justify-center">
      <section className="my-4 p-6 bg-stone-300 dark:bg-stone-800 rounded-lg max-w-md w-full">

        <header>
          <h1 className="text-2xl text-gray-800 dark:text-rose-300 font-bold mb-4 text-center">Shopping List</h1>
        </header>

        {loading ? (
          <p>Loading...</p>

        ) : user ? (
          <div className="space-y-4">
            <div className="p-4 bg-white dark:bg-black rounded">
              <p className="font-semibold">Logged in as: {user.email}</p>
              <p className="text-sm">Name: {user.displayName}</p>
              <p className="text-sm">User ID: {user.uid}</p>
            </div>

            {error && (
              <div className="p-3 bg-red-100 text-red-700 rounded-md text-sm">
                {error}
              </div>
            )}

            <Link
              href="/week-9/shoppingList"
              className="block w-full text-center text-white p-2 bg-rose-400 rounded-md font-semibold hover:bg-rose-500 dark:bg-rose-600 dark:hover:bg-rose-500"
            >
              Go to Shopping List
            </Link>

            <button
              onClick={handleSignOut}
              disabled={loading}
              className="px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Signing out..." : "Log Out"}
            </button>
          </div>

        ) : (
          <div className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300">
              Sign in to access your shopping list.
            </p>

            {error && (
              <div className="p-3 bg-red-100 text-red-700 rounded-md text-sm">
                {error}
              </div>
            )}

            <button
              onClick={handleSignIn}
              disabled={loading}
              className="px-4 py-2 bg-rose-400 hover:bg-rose-500 dark:bg-rose-600 dark:hover:bg-rose-500 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Signing in..." : "Sign in with GitHub"}
            </button>
          </div>
        )}

      </section>
    </main>
  );
}