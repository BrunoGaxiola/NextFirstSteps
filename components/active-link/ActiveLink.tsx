'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
    path: string;
    text: string;
}

// Componente Client para el link activo, cambia el color al hover y al seleccionado de acuerdo al pathname.
export const ActiveLink = ({path, text}: Props) => {
  // Hook cliente de Next para obtener el nombre del path y comparar con el path actual.
  const pathName = usePathname();
  return (
    <Link
      className={pathName === path ? "text-blue-500 mr-2" : "hover:underline hover:text-blue-400 mr-2 transition-all"}
      href={path}
    >
      {text}
    </Link>
  )
}

export default ActiveLink

