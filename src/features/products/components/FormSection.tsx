interface FormSectionProps {
  children: React.ReactNode;
}

export const FormSection = ({ children }: FormSectionProps) => {
  return (
    <div className="space-y-4">
      {children}
    </div>
  );
};