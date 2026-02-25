export default function AdminPage() {
    return (
        <div className="flex min-h-screen flex-col p-8 bg-gray-50 dark:bg-neutral-900">
            <header className="mb-8">
                <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
                <p className="text-gray-500">Live view of incoming orders</p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
                {/* Incoming Column */}
                <div className="flex flex-col gap-4 bg-white dark:bg-neutral-800 p-4 rounded-xl border border-gray-200 dark:border-neutral-700 min-h-[500px]">
                    <h2 className="font-semibold text-lg flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                        Incoming
                    </h2>
                    <div className="p-4 border border-dashed border-gray-300 dark:border-neutral-600 rounded-lg text-center text-gray-500 text-sm">
                        No new orders
                    </div>
                </div>

                {/* Preparing Column */}
                <div className="flex flex-col gap-4 bg-white dark:bg-neutral-800 p-4 rounded-xl border border-gray-200 dark:border-neutral-700 min-h-[500px]">
                    <h2 className="font-semibold text-lg flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-orange-500"></span>
                        Preparing
                    </h2>
                    {/* Mock Order Card */}
                    <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border border-orange-100 dark:border-orange-900/30">
                        <div className="flex justify-between mb-2">
                            <span className="font-bold">Order #1024</span>
                            <span className="text-xs text-orange-600 bg-orange-100 px-2 py-0.5 rounded-full">5m ago</span>
                        </div>
                        <ul className="text-sm space-y-1 mb-3">
                            <li>1x Truffle Burger</li>
                            <li>2x Espresso</li>
                        </ul>
                        <button className="w-full py-1.5 text-xs font-medium bg-white dark:bg-neutral-700 border border-gray-200 dark:border-neutral-600 rounded shadow-sm">
                            Mark Ready
                        </button>
                    </div>
                </div>

                {/* Ready/Served Column */}
                <div className="flex flex-col gap-4 bg-white dark:bg-neutral-800 p-4 rounded-xl border border-gray-200 dark:border-neutral-700 min-h-[500px]">
                    <h2 className="font-semibold text-lg flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-green-500"></span>
                        Ready
                    </h2>
                    <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-100 dark:border-green-900/30 opacity-70">
                        <div className="flex justify-between mb-2">
                            <span className="font-bold">Order #1021</span>
                            <span className="text-xs text-green-600 bg-green-100 px-2 py-0.5 rounded-full">Served</span>
                        </div>
                        <ul className="text-sm space-y-1">
                            <li>1x Caesar Salad</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
