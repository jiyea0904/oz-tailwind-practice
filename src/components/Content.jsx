export default function Content({ content }) {
  return (
    <div className="flex flex-col items-start gap-1">
      <img className="w-[300px] rounded-lg mb-1" src={content.img} alt={content.title} />
      <span className="text-xs text-[#d7fa00] border border-[#d7fa00] px-1 py-0.5 rounded">모집중</span>
      <div className="text-lg font-semibold">{content.title}</div>
      <p className="text-xs text-gray-500">{content.subtitle}</p>
    </div>
  );
}
