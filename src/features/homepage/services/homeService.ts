import { PRICING } from "@/constants/apiUrl";
import { serverFetcher } from "@/services/fetcher";
import { ResponsePricing } from "@/types/index.type";

export const homeService = async () => {
  const getPricing = () => serverFetcher<ResponsePricing>(PRICING);

  const [pricing] = await Promise.all([getPricing()]);

  return {
    pricing: pricing.data || [],
  };
};
