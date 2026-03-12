export default function BlockLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="p-5 h-screen">{children}</div>;
}
