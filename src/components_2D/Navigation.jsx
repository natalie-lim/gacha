function Nav() {
  return (
    <nav
      className="fixed top-4 right-4 z-50 flex items-center justify-between px-6 py-1 rounded-xl"
      style={{ backgroundColor: "#89a894" }}
    >
      <span className="text-white font-semibold text-lg px-5">natalie lim 하 은 </span>
      <div className="flex gap-6 text-white">
        <button>
          about
        </button>
        <button>
          work
        </button>
        <button>
          projects
        </button>
        <button>
          gacha machine
        </button>
      </div>
    </nav>
  );
}

export default Nav;
