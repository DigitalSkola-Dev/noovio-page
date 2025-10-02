import HomeScreen from "@/features/homepage/screens/HomeScreen";
import { homeService } from "@/features/homepage/services/homeService";

export const revalidate = 60;

const HomePage = async () => {
  const { pricing } = await homeService();
  return <HomeScreen pricing={pricing} />;
};

export default HomePage;
