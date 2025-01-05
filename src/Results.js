import React from "react";

const Results = ({ query, data }) => {
    const filteredData = data.filter((item) => {
        return Object.values(item)
            .join(" ")
            .toLowerCase()
            .includes(query.toLowerCase());
    });

    return (
        <div className="results-grid">
            {filteredData.length > 0 ? (
                filteredData.map((item, index) => (
                    <div key={index}>
                        <strong>{item.Title || "Untitled"}</strong> ({item.Year || "Unknown Year"})<br />
                    </div>
                ))
            ) : (
                <p>No results found.</p>
            )}
        </div>
    );
};

export default Results;

