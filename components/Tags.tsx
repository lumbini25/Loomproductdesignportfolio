// Skill tags on project cards. Not interactive.
// `nowrap` keeps them on one line from 834 up, as on the Figma cards (the 416px card fits every set).
// At 390 they wrap rather than hide a tag.
export function Tags({ items, label, nowrap }: { items: string[]; label: string; nowrap?: boolean }) {
  return (
    <ul aria-label={label} className={`flex gap-2 flex-wrap ${nowrap ? "tablet:flex-nowrap" : ""}`}>
      {items.map((tag) => (
        <li
          key={tag}
          className="shrink-0 whitespace-nowrap rounded-tag border border-line bg-surface px-3 py-1.5 font-jakarta text-body-s leading-5 font-medium text-subtitle"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}
