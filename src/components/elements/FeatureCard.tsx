import { FeatureCardProps } from "@/types/elements";

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="p-6 bg-white shadow-lg rounded-lg hover:shadow-xl transition">
      {icon}
      <h3 className="text-xl font-semibold mt-4">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
};

export default FeatureCard;
