import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("programming");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm);
  const [results, setResults] = useState([]);

  const onSearchInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [searchTerm]);

  // We use a debouncer because we dont want to check the result length to figure search by default or we get a warning
  // We can improve the performance of the search by having a timer before executing the api call and cancelling (throttling)
  // every 1000 ms when there is a new search term, so we're not calling the same thing multiple times
  useEffect(() => {
    const wikipedia = "https://en.wikipedia.org/w/api.php";
    const search = async () => {
      const { data } = await axios.get(wikipedia, {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: debouncedSearchTerm,
        },
      });

      console.log(data.query.search);
      setResults(data.query.search);
    };

    search();
  }, [debouncedSearchTerm]);

  const renderedResults = results.map((result) => {
    return (
      <div key={result.title} className="item">
        <div className="right floated content">
          <a
            className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter search term:</label>
          <input
            className="input"
            value={searchTerm}
            onChange={(e) => onSearchInputChange(e)}
          />
          Search term is {searchTerm}
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;
