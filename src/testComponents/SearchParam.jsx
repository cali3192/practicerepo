import React, { useState } from "react";

const SearchParam = () => {
  // with each change in state, we rerender
  // hooks take in an initial state and some kind of updater and always returns an array
  // destructuring the useState hook
  const [location, setLocation] = useState("");

  return (
    <div className="search-params">
      updated location: {location}
      <form>
        <label htmlFor="location">
          Location:
          <input
            type="text"
            id="location"
            value={location}
            placeholder="placeholder location"
            onChange={e => {
              // takes an event and sets state, setLocation is the updatedfor the location state
              setLocation(e.target.value);
            }}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParam;
