import React, {useState, useEffect} from "react";
import Filters from "./Filters";
import Results from "./Results";
import "./styles.css";

const App = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [yearRange, setYearRange] = useState([2011, 2025]);
    const [widthRange, setWidthRange] = useState([0, 100]);
    const [heightRange, setHeightRange] = useState([0, 100]);
    const [unit, setUnit] = useState("Dimensions (inches)");
    const [mediumMaterialFilters, setMediumMaterialFilters] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [query, setQuery] = useState(""); // Track the search query

    const handleSearch = () => {
        if (query.trim()) {
            console.log(`Searching for: ${query}`);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/Yung_Jake_Archive.json");
                if (!response.ok) throw new Error("Failed to fetch data");
                const json = await response.json();
                setData(json);
                setFilteredData(json);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        filterData();
    }, [mediumMaterialFilters, yearRange, widthRange, heightRange, unit, searchTerm]);

    const filterData = () => {
        const filtered = data.filter(item => {
            const year = item.Year;
            const withinYearRange = year >= yearRange[0] && year <= yearRange[1];

            const dimensions = item[unit];
            const withinDimensions = dimensions
                ? (() => {
                    const [width, height] = dimensions.split("x").map(Number);
                    return (
                        width >= widthRange[0] &&
                        width <= widthRange[1] &&
                        height >= heightRange[0] &&
                        height <= heightRange[1]
                    );
                })()
                : true;

            const matchesMediumMaterial =
                mediumMaterialFilters.length === 0 ||
                (item["Medium-Material"] &&
                    mediumMaterialFilters.some(filter =>
                        item["Medium-Material"].toLowerCase().includes(filter.toLowerCase())
                    ));

            const matchesSearch =
                searchTerm === "" ||
                Object.values(item)
                    .filter(value => value !== null)
                    .some(value =>
                        value.toString().toLowerCase().includes(searchTerm.toLowerCase())
                    );

            return (
                withinYearRange &&
                withinDimensions &&
                matchesMediumMaterial &&
                matchesSearch
            );
        });

        setFilteredData(filtered);
    };

    return (
        <div className="app">
            <header>
                <div className="header-content">
                    <img src="./logo.png" alt="JaKeBaY Logo" className="logo"/>
                </div>
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Search for artworks..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <button onClick={handleSearch}>I'm Feeling Lucky</button>
                </div>
            </header>
            <main>
                <div className="filters-pane">
                    <Filters
                        yearRange={yearRange}
                        setYearRange={setYearRange}
                        widthRange={widthRange}
                        setWidthRange={setWidthRange}
                        heightRange={heightRange}
                        setHeightRange={setHeightRange}
                        unit={unit}
                        setUnit={setUnit}
                        mediumMaterialFilters={mediumMaterialFilters}
                        setMediumMaterialFilters={setMediumMaterialFilters}
                        filterData={filterData}
                        data={data}
                        setData={setData}
                    />
                </div>
                <div className="results-pane">
                    <h2>Results</h2>
                    <Results query={query} data={filteredData}/>
                </div>
                <div className="ads-pane">
                    <h2>Not Sponsored</h2>
                    <div className="ad">
                        <img src="/bobross.gif" alt="Bob Ross"/>
                    </div>
                    <div className="ad">
                        <p>Ad #2: Frame your masterpiece today!</p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default App;
