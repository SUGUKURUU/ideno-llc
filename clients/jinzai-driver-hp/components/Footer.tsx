export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-black/5">
      <p className="text-center text-xs text-slate-400">
        &copy; {new Date().getFullYear()} ［会社名］
      </p>
    </footer>
  );
}
