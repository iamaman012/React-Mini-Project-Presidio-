import { useQuery } from "@tanstack/react-query";
import { getCountries, getSpeficCountry, getCountryByCode } from "../api/axios";

export const useGetCountries = () => {
  return useQuery({
    queryKey: ["Countries"],
    queryFn: async () => {
      const response = await getCountries();
      return response;
    },
  });
};

export const useGetSpecificCountry = (name) => {
  return useQuery({
    queryKey: ["Countries", name],
    queryFn: async () => {
      const response = await getSpeficCountry(name);
      return response;
    },
  });
};

export const useGetCountryByCode = (code) => {
  return useQuery({
    queryKey: ["Countries", code],
    queryFn: async () => {
      const response = await getCountryByCode(code);
    },
  });
};
