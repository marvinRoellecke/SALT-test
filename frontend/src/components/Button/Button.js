export default function Button({ type, className, content, onClick }) {
  return (
    <button type={type} onClick={onClick} className={className}>
      {content}
    </button>
  );
}
