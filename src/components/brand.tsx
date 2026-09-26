import { Link } from "@tanstack/react-router";

export function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link to="/" className="inline-flex items-center" aria-label="NAVOGIZ Innovative Solutions home">
      <img
        src="/logo.png"
        alt="NAVOGIZ Innovative Solutions logo"
        className={
          inverse
            ? "h-10 w-auto brightness-0 invert md:h-11"
            : "h-10 w-auto md:h-11"
        }
      />
    </Link>
  );
}
