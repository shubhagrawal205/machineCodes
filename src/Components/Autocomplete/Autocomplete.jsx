import { useState, useRef, useEffect } from "react";
const cityNames = [
  "Amsterdam",
  "Berlin",
  "London",
  "New York",
  "Paris",
  "Rome",
  "San Francisco",
  "Tokyo",
  "Washington DC",
  "Zurich",
  "Copenhagen",
  "Helsinki",
  "Madrid",
  "Reykjavik",
  "Stockholm",
  "Vancouver",
  "Vienna",
  "Zagreb",
  "Budapest",
  "Dublin",
  "Hamburg",
  "Krakow",
  "Lisbon",
  "Ljubljana"
];

const Autocomplete = () => {
  const [data] = useState(cityNames);
  const [filteredData, setfilteredData] = useState(cityNames);
  const [value, setValue] = useState("");
  const autocompleteRef = useRef(null);

  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleClick = (event) => {
      if (
        autocompleteRef.current &&
        !autocompleteRef.current.contains(event.target)
      ) {
        setShow(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const debounce = function (fn) {
    let timer;
    return function (...args) {
      if (timer) clearTimeout(timer);
      let context = this;
      timer = setTimeout(() => {
        timer = null;
        fn.apply(context, args);
      }, 500);
    };
  };

  const handleChange = (value) => {
    setValue(value);
    const optimised = debounce(fun);
    optimised(value);
  };

  const fun = (value) => {
    const filteredData = data.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase())
    );
    setfilteredData(filteredData);
  };

  const handleClick = (value) => {
    setValue(value);
    setShow(false);
  };
  return (
    <>
      <div style={styles.autocomplete} ref={autocompleteRef}>
        <input
          style={styles.autocomplete}
          value={value}
          onChange={(e) => handleChange(e.target.value)}
          type="text"
          placeholder="Type to Search"
          onFocus={() => setShow(true)}
        />
        {show && (
          <ul style={styles.list}>
            {filteredData.map((row) => {
              return <li style={styles.listItem} onClick={() => handleClick(row)}>{row}</li>;
            })}
          </ul>
        )}
      </div>
    </>
  );
};

const styles = {
  autocomplete: {
    width: '10rem',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#210253',
    color: 'white',
    textAlign: 'center',
    transition: 'transform 0.3s, box-shadow 0.3s',
  },
  list:{
    listStyle: 'none',
    padding: '0',
    margin: '0',
    border: '1px solid #ccc',
    borderRadius: '10px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
    maxHeight: '250px', 
    overflowY: 'auto',
  },
  listItem:{
    padding: '10px',
    margin: '0',
    border: '1px solid #ccc',
  },
  
};

export default Autocomplete;