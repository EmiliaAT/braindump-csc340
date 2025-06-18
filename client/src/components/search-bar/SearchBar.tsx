export interface SearchBarProps {
  panel: "article" | "collection";
  onSelectArticle: () => void;
  onSelectCollection: () => void;
}

export default function SearchBar({
  panel,
  onSelectArticle,
  onSelectCollection,
}: SearchBarProps) {
  return (
    <div className="flex flex-row align-items">
      <button
        type="button"
        className={`cursor-pointer text-xl px-6 py-3 rounded-xl font-bold ${panel == "article" ? "bg-white text-neutral-950" : "bg-neutral-950 text-white"}`}
        onClick={onSelectArticle}
      >
        Articles
      </button>
      <button
        type="button"
        className={`cursor-pointer text-xl px-6 py-3 rounded-xl font-bold ${panel == "collection" ? "bg-white text-neutral-950" : "bg-neutral-950 text-white"}`}
        onClick={onSelectCollection}
      >
        Collections
      </button>
    </div>
  );
}
