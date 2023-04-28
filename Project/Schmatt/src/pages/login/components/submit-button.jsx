export default function Button({ text }) {
  return (
    <button type="submit" className="bg-iris text-lg rounded-3xl mt-4 h-12">
      {text}
    </button>
  );
}
