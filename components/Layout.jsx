import About from "../pages/About";
export default function Layout({ children }) {
  return (
    <>
      <About />
      {children}
     
    </>
  );
}