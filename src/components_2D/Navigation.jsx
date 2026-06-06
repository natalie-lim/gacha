function Nav() {
  return (
    <nav
      className="fixed top-4 right-4 z-50 flex items-center justify-between px-6 py-1 rounded-xl"
      style={{ backgroundColor: "#89a894" }}
    >
      <span className="text-white font-semibold text-lg px-5">Natalie Lim 하 은 </span>
      <div className="flex gap-6">
        <button>
          About
        </button>
        <button>
          Work
        </button>
      </div>
    </nav>
  );
}

export default Nav;
