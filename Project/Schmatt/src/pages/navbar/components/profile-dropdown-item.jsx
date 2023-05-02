export default function ProfileDropdownItem({ text, link, logout }) {
  return (
    <a href={link}>
      <div
        onClick={logout}
        className="py-2 hover:bg-button-active cursor-pointer"
      >
        {text}
      </div>
    </a>
  );
}
