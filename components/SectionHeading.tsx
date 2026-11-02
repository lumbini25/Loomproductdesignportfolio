// H3 heading with a short note to its right ("Selected work", "Writing", principles).
// The note sits under the heading below 1440, where the longest headings leave it no room.
export function SectionHeading({
  id,
  title,
  note,
}: {
  id?: string;
  title: string;
  note?: string;
}) {
  return (
    <div className="flex flex-col gap-2 desktop:flex-row desktop:items-end desktop:justify-between desktop:gap-8">
      <h2 id={id} className="text-h3-sm font-bold max-tablet:font-jakarta tablet:text-h3">
        {title}
      </h2>
      {note && <p className="text-subtitle-s text-caption desktop:text-right">{note}</p>}
    </div>
  );
}
