export default function PartnersBar() {
  return (
    <section className="w-full bg-white py-12 border-t border-gray-50">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-center justify-between gap-6 hide-scrollbar overflow-x-auto">
          {[...Array(7)].map((_, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[140px] h-[50px] bg-gray-100 rounded-md"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
