export default function Header({ children }) {
  return (
    <header className="md:text-3xl text-2xl pb-3 mt-2 mb-2 border-b-2 w-full font-medium">
      {children}
    </header>
  );
}
