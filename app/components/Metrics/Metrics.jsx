const MetricsSection = () => {
    return (
        <section className="py-10 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 md:gap-6">
                <div className="bg-white dark:bg-gray-950 shadow-lg shadow-gray-200/50 dark:shadow-transparent border border-gray-100/80 dark:border-gray-900/80 p-6 md:p-5 lg:p-6 rounded-lg flex flex-col justify-center gap-0.5 text-center text-gray-700 dark:text-gray-300">
                    <span className="font-semibold text-xl sm:text-3xl md:text-4xl text-gray-900 dark:text-white">
                        40 Yıl
                    </span>
                    <span>
                        Tecrübe
                    </span>
                </div>
                <div className="bg-white dark:bg-gray-950 shadow-lg shadow-gray-200/50 dark:shadow-transparent border border-gray-100/80 dark:border-gray-900/80 p-6 md:p-5 lg:p-6 rounded-lg flex flex-col justify-center gap-0.5 text-center text-gray-700 dark:text-gray-300">
                    <span className="font-semibold text-xl sm:text-3xl md:text-4xl text-gray-900 dark:text-white">
                        +4k
                    </span>
                    <span>
                        Proje
                    </span>
                </div>
                <div className="bg-white dark:bg-gray-950 shadow-lg shadow-gray-200/50 dark:shadow-transparent border border-gray-100/80 dark:border-gray-900/80 p-6 md:p-5 lg:p-6 rounded-lg flex flex-col justify-center gap-0.5 text-center text-gray-700 dark:text-gray-300">
                    <span className="font-semibold text-xl sm:text-3xl md:text-4xl text-gray-900 dark:text-white">
                        95%
                    </span>
                    <span>
                        Memnuniyet
                    </span>
                </div>
                <div className="bg-white dark:bg-gray-950 shadow-lg shadow-gray-200/50 dark:shadow-transparent border border-gray-100/80 dark:border-gray-900/80 p-6 md:p-5 lg:p-6 rounded-lg flex flex-col justify-center gap-0.5 text-center text-gray-700 dark:text-gray-300">
                    <span className="font-semibold text-xl sm:text-3xl md:text-4xl text-gray-900 dark:text-white">
                        +2k
                    </span>
                    <span>
                        Müşteri
                    </span>
                </div>
            </div>
        </section>
    )
}

export default MetricsSection