import { Link } from "@tanstack/react-router";

export function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link
      to="/"
      className="inline-flex items-center"
      aria-label="NAVOGIZ Innovative Solutions home"
    >
      <img
        src={inverse ? "/logowhite.png" : "/logo.png"}
        alt="NAVOGIZ Innovative Solutions logo"
        className="h-10 w-auto md:h-11 transition-all duration-300"
      />
    </Link>
  );
}
