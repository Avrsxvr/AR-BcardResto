'use client';

import { useCartStore } from '@/lib/store';
import { Plus, ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';

const MOCK_MENU = [
    { id: '1', name: 'Truffle Burger', price: 18, category: 'Main', image: '🍔' },
    { id: '2', name: 'Margherita Pizza', price: 14, category: 'Main', image: '🍕' },
    { id: '3', name: 'Caesar Salad', price: 10, category: 'Starters', image: '🥗' },
    { id: '4', name: 'Tiramisu', price: 8, category: 'Dessert', image: '🧁' },
    { id: '5', name: 'Espresso', price: 4, category: 'Drinks', image: '☕' },
];

export default function MenuPage() {
    const addItem = useCartStore((state) => state.addItem);
    const cartTotal = useCartStore((state) => state.total());
    const cartItemsCount = useCartStore((state) => state.items.length);

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-zinc-900 pb-20">
            {/* Header */}
            <header className="sticky top-0 z-40 w-full backdrop-blur-lg bg-white/70 dark:bg-black/70 border-b border-gray-200 dark:border-white/10 p-4 flex justify-between items-center">
                <h1 className="text-xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                    Our Menu
                </h1>
                <div className="relative p-2 bg-gray-100 dark:bg-zinc-800 rounded-full">
                    <ShoppingCart size={24} className="text-gray-700 dark:text-gray-200" />
                    {cartItemsCount > 0 && (
                        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                            {cartItemsCount}
                        </span>
                    )}
                </div>
            </header>

            {/* Menu Grid */}
            <main className="container mx-auto p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {MOCK_MENU.map((dish, index) => (
                        <motion.div
                            key={dish.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white dark:bg-zinc-800 rounded-2xl shadow-sm border border-gray-100 dark:border-zinc-700 overflow-hidden flex flex-col"
                        >
                            <div className="h-48 bg-gray-200 dark:bg-zinc-700 flex items-center justify-center text-6xl">
                                {dish.image}
                            </div>
                            <div className="p-4 flex-1 flex flex-col justify-between">
                                <div>
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="font-bold text-lg">{dish.name}</h3>
                                        <span className="font-medium text-orange-600 dark:text-orange-400">${dish.price}</span>
                                    </div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{dish.category}</p>
                                </div>
                                <button
                                    onClick={() => addItem({ ...dish, quantity: 1 })}
                                    className="w-full py-2 bg-black dark:bg-white text-white dark:text-black rounded-xl font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity active:scale-95"
                                >
                                    <Plus size={16} /> Add to Order
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </main>

            {/* Floating Cart Summary (if items exist) */}
            {cartItemsCount > 0 && (
                <div className="fixed bottom-6 left-0 w-full px-4 flex justify-center z-40">
                    <div className="bg-black/90 dark:bg-white/90 backdrop-blur-md text-white dark:text-black w-full max-w-md rounded-2xl p-4 shadow-2xl flex justify-between items-center cursor-pointer">
                        <div className="flex flex-col">
                            <span className="text-xs opacity-70">{cartItemsCount} items</span>
                            <span className="font-bold text-lg">${cartTotal.toFixed(2)}</span>
                        </div>
                        <div className="flex items-center gap-2 font-bold">
                            View Cart
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
