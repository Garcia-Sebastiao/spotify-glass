export function MainLayout({ children }: { children?: React.ReactNode }) {
  return (
    <div className="flex glass overflow-hidden flex-col w-full flex-1 rounded-4xl">
      {children}
    </div>
  );
}
