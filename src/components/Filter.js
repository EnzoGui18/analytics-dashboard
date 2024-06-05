import React from "react";

const Filter = ({onChange}) =>(
    <div>
        <label>
            Filter by:
            <select onChange={onChange}>
                <option value="option1">Opção 1</option>
                <option value="option2">Opção 2</option>
            </select>
        </label>
    </div>
);

export default Filter