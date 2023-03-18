export default function LoggedInLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode,
  }) {
    return (
      <section>
        NavBar  
        {children}
      </section>
    );
  }
  