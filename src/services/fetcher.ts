/* eslint-disable @typescript-eslint/no-explicit-any */
import { API_URL, TOKEN } from "@/constants/apiUrl";
import api from "./base";

export async function serverFetcher<T>(endpoint: string): Promise<T> {
  try {
    const res = await fetch(API_URL + endpoint, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Chat-Token": TOKEN,
      },
    });

    if (!res.ok) {
      throw new Error(`Request failed with status ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error: any) {
    console.error("Fetch error:", error);
    throw new Error(error.message || "Something went wrong");
  }
}

export async function clientGet<T>(endpoint: string): Promise<T> {
  try {
    const res = await api.get(endpoint);
    return res.data;
  } catch (error: any) {
    console.error("Axios error:", error);
    throw new Error(error.response?.data?.message || error.message);
  }
}

export async function clientPost<T>(url: string, payload: any): Promise<T> {
  try {
    const res = await api.post(url, payload);
    return res.data;
  } catch (err: any) {
    const message =
      err.response?.data?.message || err.message || "Terjadi kesalahan";
    throw new Error(message);
  }
}
