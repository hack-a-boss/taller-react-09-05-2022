import "./App.css";
import { useEffect, useState, useCallback, useMemo } from "react";
import { Search } from "./components/Search";
import { List } from "./components/List";
import { Card } from "./components/Card";

function App() {
  const [people, setPeople] = useState([]);
  const [filter, setFilter] = useState("");
  const [selected, setSelected] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      const response = await fetch(process.env.REACT_APP_BACKEND);

      //Aquí debería controlar si hay errores
      const json = await response.json();
      setPeople(json.data);
    };

    loadData();
  }, []);

  // Devuelve la lista de personas filtradas
  const filteredPeople = useMemo(() => {
    if (!filter) return people;

    return people.filter((person) =>
      person.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [people, filter]);

  // Event handler del filtro
  const handleFilter = useCallback((e) => {
    setFilter(e.target.value);
  }, []);

  // Función que establece la persona seleccionada
  const selectPerson = useCallback(
    (id) => {
      setSelected(people.find((person) => person.id === id));
    },
    [people]
  );

  useEffect(() => {
    setSelected(filteredPeople[0]);
  }, [filteredPeople]);

  return (
    <main className={darkMode ? "dark" : ""}>
      <header>
        <h1>Address book</h1>

        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀️" : "🌙"}
        </button>
      </header>

      <section className="app">
        {/* Search */}
        <Search handleFilter={handleFilter} />

        {/* Contact List */}
        <List people={filteredPeople} selectPerson={selectPerson} />

        {/* Card */}
        <Card person={selected} />
      </section>
    </main>
  );
}

export default App;
