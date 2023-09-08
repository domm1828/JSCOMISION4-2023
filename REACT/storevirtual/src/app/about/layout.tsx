import NavBar from "../components/nav-bar"

export default function AboutLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
  
  
    return (
     <>
          <NavBar/>

          {children}
    </>
    )
  }
  