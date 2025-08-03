export const getButtonStyle = (isDisabled: boolean, baseColor: string) => {
  const baseStyle = "w-full px-8 py-4 text-white rounded-xl shadow-soft transition-all duration-300 font-medium text-sm";
  return `${baseStyle} ${isDisabled ? "bg-gray-300 cursor-not-allowed opacity-50" : baseColor}`;
};

export const getPrimaryButtonStyle = (isDisabled: boolean) => 
  getButtonStyle(isDisabled, "bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 hover:shadow-medium transform hover:scale-105");

export const getSecondaryButtonStyle = (isDisabled: boolean) => 
  getButtonStyle(isDisabled, "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 hover:shadow-medium transform hover:scale-105");

export const getGradientButtonStyle = (isDisabled: boolean, gradient: string) => {
  const baseStyle = "w-full px-8 py-4 text-white rounded-xl shadow-soft transition-all duration-300 font-medium text-sm";
  const gradientStyle = `bg-gradient-to-r ${gradient} hover:shadow-medium transform hover:scale-105`;
  return `${baseStyle} ${isDisabled ? "bg-gray-300 cursor-not-allowed opacity-50" : gradientStyle}`;
};

export const getCardStyle = () => 
  "bg-white rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 border border-gray-100";

export const getGlassStyle = () => 
  "bg-white/80 backdrop-blur-sm rounded-2xl shadow-soft border border-white/20"; 