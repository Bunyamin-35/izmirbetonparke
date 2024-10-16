'use client'
import { useState } from 'react';
import { items } from "../data/products.js"
import Image from 'next/image.js';

export default function HomePage() {
    const [selectedSubitem, setSelectedSubitem] = useState(null); // To track the selected sublist item
    const [expandedItems, setExpandedItems] = useState([]); // To track which items have expanded sublists

    // Function to toggle the sublist of an item
    const toggleSublist = (itemId) => {
        setExpandedItems((prevState) =>
            prevState.includes(itemId)
                ? prevState.filter((id) => id !== itemId) // Collapse sublist if it's already expanded
                : [...prevState, itemId] // Expand sublist if it's collapsed
        );
    };

    return (
        <div className="min-h-screen flex bg-gray-100">
            {/* Left Sidebar (List of Items) */}
            <div className="w-1/4 p-6 bg-white shadow-md">
                <h2 className="text-xl font-bold mb-4">Products</h2>
                <ul>
                    {items.map((item) => (
                        <li key={item.id}>
                            {/* Main list item */}
                            <div
                                className={`p-2 mb-2 cursor-pointer rounded ${expandedItems.includes(item.id) ? 'bg-blue-500 text-white' : 'bg-gray-200'
                                    }`}
                                onClick={() => toggleSublist(item.id)} // Toggle sublist on click
                            >
                                {item.name}
                            </div>

                            {/* Sublist (Features or subitems of the selected main item) */}
                            {expandedItems.includes(item.id) && (
                                <ul className="ml-4">
                                    {item.subitems.map((subitem) => (
                                        <li
                                            key={subitem.id}
                                            className={`p-2 mb-1 cursor-pointer rounded ${selectedSubitem?.id === subitem.id ? 'bg-green-500 text-white' : 'bg-gray-300'
                                                }`}
                                            onClick={() => setSelectedSubitem(subitem)}
                                        >
                                            {subitem.name}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Right Content (Details of the Selected Item or Subitem) */}
            <div className="w-3/4 p-6">
                {/* Display subitem details if a subitem is selected */}
                {selectedSubitem ? (
                    <>
                        <h1 className="text-2xl font-bold">{selectedSubitem.name}</h1>

                        <Image
                            src={selectedSubitem.image}
                            alt={selectedSubitem.name}
                            width={150}  // Replace with the width you want
                            height={150} // Replace with the height you want
                            className="w-10 h-10 object-cover mr-2"
                        />
                        <p className="mt-4 text-gray-700">{selectedSubitem.description}</p>
                    </>
                ) : (
                    <p className="text-gray-700">Select a feature from the left to see more details.</p>
                )}
            </div>
        </div>
    );
}