export function Header() {
  return (
    <header className="fixed right-0 left-0 bg-blue-500 flex z-10  items-center justify-between h-16 px-10 shadow-2xs">
      
      <h1 className="text-4xl text-center text-white tracking-widest">Resume Walla</h1>
      <ul className="flex">
        <li className="text-white tracking-widest ml-5">Pricing</li>
        <li className="text-white tracking-widest ml-5">More Ai Tools</li>
        <li className="text-white tracking-widest ml-5">About</li>
      </ul>
    </header>
  );
}
