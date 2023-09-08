import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div>
      <h2>Not Found About</h2>
      <p>Could not find requested resource</p>
      <Link href="/about">Return About</Link>
    </div>
  )
}