'use client'
/**
 * hooks navigation => (next/router)
 *                  => (next/navigation)
 * useRouter => objecto de funcion
 * push(path) => insertar nueva ruta
 * back() => ir atras
 * replace(path)
 * 
 * useContext
 * 1.- crearlo
 * 2.- generar provider
 * 3.- usarlo => leer datos
 */
import {useRouter,usePathname,useSearchParams} from 'next/navigation'
import { useThemeContext } from './context/theme';
export default function Home() {
  const router = useRouter();
  const currentRoute = usePathname();
  const searchParams = useSearchParams();//query param

  const a = searchParams.get("a");

console.log(a);
  console.log(searchParams);
  const {color,setColor} = useThemeContext();

  return (
    <main className={color+' flex min-h-screen flex-col items-center justify-between p-24'}>
       hola
       <p>{a}</p>

 
       <button onClick={()=>{
        router.back();
       }}>
        Ir atras
       </button>

       <button onClick={()=>{
        router.push('/contact')
       }}>
        Ir a contact
       </button>

       <button onClick={()=>{
        router.replace('/contact');
       }}>Ir a contact Replace</button>

       <button onClick={()=>{
        setColor("bg-zinc-500");
       }}>Cambiar color</button>
    </main>
  )
}
