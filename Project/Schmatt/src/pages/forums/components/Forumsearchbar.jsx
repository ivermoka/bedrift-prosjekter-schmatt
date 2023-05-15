import { useState } from "react";

const items = [
    { id: 1, name: 's/CodingTips', category: 'Coding' },
    { id: 2, name: 's/CodingNews', category: 'Coding' },
    { id: 3, name: 's/WebDevelopment', category: 'Coding' },
    { id: 4, name: 's/CodingHelp', category: 'Coding' },
    { id: 5, name: 's/Cacti', category: 'Plants' },
    { id: 6, name: 's/Plant-help', category: 'Plants' },
    { id: 7, name: 's/Flowers', category: 'Plants' },
    { id: 8, name: 's/Cardio', category: 'Fitness' },
    { id: 9, name: 's/Strong', category: 'Fitness' },
    { id: 8, name: 's/BigDudes', category: 'Fitness' },
];

export default function Searchbar({ setSelectedForum}) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredItems = items.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <form className="">
                <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div class="relative">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input value={searchTerm} onChange={handleInputChange} type="search" id="default-search" class="block w-full h-12 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-[#283239] dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search forums ..." required></input>
                </div>
            </form>
            
            {searchTerm.length > 0 && (
                <ul>
                {filteredItems.map((item) => (
                    <li className=" p-2 cursor-pointer" onClick={() => setSelectedForum(item.name)} key={item.id}>
                    {item.name} ({item.category})
                    </li>
                ))}
                </ul>
            )}
           
        </>
    )
}