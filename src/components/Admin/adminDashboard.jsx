import React, { useState } from "react";
import SearchMovies from "./searchMovies";
import MoviesList from "./moviesList";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("add"); 

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-black bg-opacity-50 rounded-lg p-6">
        <h1 className="text-3xl font-bold text-white mb-8">Admin Dashboard</h1>
        
        {/* Tab Navigation */}
        <div className="flex mb-6 space-x-4">
          <button
            onClick={() => setActiveTab("add")}
            className={`px-4 py-2 rounded-lg ${
              activeTab === "add"
                ? "bg-yellow-400 text-black"
                : "bg-gray-700 text-white hover:bg-gray-600"
            }`}
          >
            Add Movies
          </button>
          <button
            onClick={() => setActiveTab("list")}
            className={`px-4 py-2 rounded-lg ${
              activeTab === "list"
                ? "bg-yellow-400 text-black"
                : "bg-gray-700 text-white hover:bg-gray-600"
            }`}
          >
            Movies List
          </button>
        </div>

        {/* Content Area */}
        <div className="mt-6">
          {activeTab === "add" ? <SearchMovies /> : <MoviesList />}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
