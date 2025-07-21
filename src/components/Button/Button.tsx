const Button = ({ title }: { title: string }) => {
  return (
    <div>
      <button className="btn btn-primary">{title}</button>
    </div>
  );
};

export default Button;
