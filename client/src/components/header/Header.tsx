import type { ChangeEventHandler, PropsWithChildren } from "react";
import { useNavigate } from "react-router";

export interface HeaderProps {
  onSearchChange?: ChangeEventHandler<HTMLInputElement>;
}

export default function Header({
  onSearchChange,
  children,
}: PropsWithChildren<HeaderProps>) {
  const navigate = useNavigate();

  return (
    <div className="flex w-full flex-row items-center justify-between gap-8 px-8 py-4">
      {/* Header Logo */}
      <button
        type="button"
        className="cursor-pointer text-2xl text-white"
        onClick={() => {
          void navigate("/");
        }}
      >
        Brain
        <span className="ml-1 rounded-xl bg-rose-600 px-2 py-2 font-extrabold">
          Dump
        </span>
      </button>
      {/* Header Search */}
      <input
        type="text"
        className="mx-6 box-border grow-1 border-b-1 border-b-neutral-800 px-6 py-3 text-white"
        placeholder="Filter:"
        onChange={onSearchChange}
      />
      {/* Header Navbar */}
      <nav className="flex flex-row items-center gap-8">{children}</nav>
    </div>
  );
}
