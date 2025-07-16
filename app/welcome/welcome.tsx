import image from "/sample.png";

export function Welcome() {
  return (
    <div className="fixed inset-0 bg-gray-100">
      <img
        src={image}
        alt="Centered"
        className="w-full h-full object-center object-contain"
      />
    </div>
  );
}
