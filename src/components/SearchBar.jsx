export default function SearchBar({ value, onChange }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Busque por um filme..."
        aria-label="Buscar filmes"
      />
    </div>
  );
}
