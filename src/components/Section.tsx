export const Section = ({
  id,
  children,
  ...rest
}: {
  children: React.ReactNode;
  id: string;
}) => {
  return (
    <section
      id={id}
      className="grid min-h-screen py-2 bg-transparent element place-items-center"
      {...rest}
    >
      <div className="container grid h-full mx-auto rounded place-items-center">
        {children}
      </div>
    </section>
  );
};
