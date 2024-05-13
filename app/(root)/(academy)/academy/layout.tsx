import { AcademyNavbar } from "@/components/toolkit/AcademyNavbar"

const AcademyLayout = ({children}: {children: Readonly<React.ReactNode>}) => {
  return (
    <>
      <AcademyNavbar />
      {children}
    </>
  )
}
export default AcademyLayout