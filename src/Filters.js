import React from "react";
import ReactSlider from "react-slider";

const Filters = ({
                     yearRange,
                     setYearRange,
                     widthRange,
                     setWidthRange,
                     heightRange,
                     setHeightRange,
                     unit,
                     setUnit,
                     mediumMaterialFilters,
                     setMediumMaterialFilters,
                     filterSaleStatus,
                     setFilterSaleStatus,
                     filterData,
                    data,
                    setData,
                 }) => {
    const mediumMaterialOptions = [
        "aluminum can",
        "animation",
        "bolts",
        "canvas",
        "carpet",
        "colored pencil",
        "digital video",
        "dumpster",
        "found metal",
        "hardware",
        "ink",
        "LEGO piece",
        "magic the gathering card",
        "magnets",
        "metal hardware",
        "monitor",
        "neon",
        "nerf dart",
        "nerf gun",
        "oil",
        "paint",
        "paper",
        "aluminum",
        "metal",
        "steel",
        "Repurposed scaffold",
        "sharpie",
        "spray paint",
        "steel bolts",
        "stickers",
        "super soaker",
        "UV print",
        "vinyl",
        "water",
        "weaving loop",
        "wood",
    ];

    const handleSliderChange = (values, setRange) => {
        setRange(values);
        filterData();
    };

    const renderTrack = (props, state) => {
        const { index, value } = state;
        const [min, max] = value;

        const gradient = `linear-gradient(
            to right,
            #ddd ${index === 0 ? "0%" : `${(min - props.min) / (props.max - props.min) * 100}%`},
            #0064d2 ${(min - props.min) / (props.max - props.min) * 100}%,
            #0064d2 ${(max - props.min) / (props.max - props.min) * 100}%,
            #ddd ${(max - props.min) / (props.max - props.min) * 100}%,
            #ddd 100%
        )`;

        return (
            <div
                {...props}
                style={{
                    ...props.style,
                    height: "10px",
                    borderRadius: "5px",
                    background: gradient,
                }}
            />
        );
    };

    const handleUnitChange = (e) => {
        setUnit(e.target.value);
        filterData();
    };

    const handleCheckboxChange = (e) => {
        const { value, checked } = e.target;
        setMediumMaterialFilters(prev =>
            checked ? [...prev, value] : prev.filter(item => item !== value)
        );
        filterData();
    };

    const handleSaleStatusChange = (e) => {
        setFilterSaleStatus(e.target.checked);
        filterData();
    };

    return (
        <aside className="filters">
            <h2>Filters</h2>

            {/* YEAR - RANGE */}
            <div className="filter-section">
                <label>Year Range:</label>
                <ReactSlider
                    className="slider"
                    thumbClassName="thumb"
                    renderTrack={renderTrack}
                    value={yearRange}
                    onChange={(values) => handleSliderChange(values, setYearRange)}
                    min={2011}
                    max={2025}
                    pearling
                    minDistance={1}
                />
                <span>{yearRange[0]} - {yearRange[1]}</span>
            </div>

            {/* DIMENSION UNITS */}
            <div className="filter-section">
                <label htmlFor="unit-select">Dimensions Unit:</label>
                <select id="unit-select" value={unit} onChange={handleUnitChange}>
                    <option value="Dimensions (inches)">Inches</option>
                    <option value="Dimensions (cm)">Centimeters</option>
                </select>
            </div>

            {/* DIMENSION WIDTH */}
            <div className="filter-section">
                <label>Width ({unit}):</label>
                <ReactSlider
                    className="slider"
                    thumbClassName="thumb"
                    renderTrack={renderTrack}
                    value={widthRange}
                    onChange={(values) => handleSliderChange(values, setWidthRange)}
                    min={0}
                    max={100}
                    pearling
                    minDistance={1}
                />
                <span>{widthRange[0]} - {widthRange[1]} {unit}</span>
            </div>

            {/* DIMENSION HEIGHT */}
            <div className="filter-section">
                <label>Height ({unit}):</label>
                <ReactSlider
                    className="slider"
                    thumbClassName="thumb"
                    renderTrack={renderTrack}
                    value={heightRange}
                    onChange={(values) => handleSliderChange(values, setHeightRange)}
                    min={0}
                    max={100}
                    pearling
                    minDistance={1}
                />
                <span>{heightRange[0]} - {heightRange[1]} {unit}</span>
            </div>

            {/* MEDIUM-MATERIAL */}
            <div className="filter-section">
                <label>Medium-Material:</label>
                <div className="checkbox-group">
                    {mediumMaterialOptions.map((option, index) => (
                        <label key={index}>
                            <input
                                type="checkbox"
                                value={option}
                                onChange={handleCheckboxChange}
                            />
                            {option}
                        </label>
                    ))}
                </div>
            </div>

            {/* SALE STATUS */}
            <div className="filter-section">
                <label>
                    <input
                        type="checkbox"
                        checked={filterSaleStatus}
                        onChange={handleSaleStatusChange}
                    />
                    Show Only Available for Sale
                </label>
            </div>
        </aside>
    );
};

export default Filters;
