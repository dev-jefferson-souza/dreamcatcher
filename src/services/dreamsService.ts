import AsyncStorage from "@react-native-async-storage/async-storage";
import { IDream } from "../models/dream";

const STORAGE_KEYS = {
  DREAMS: "@dreamcatcher-v1.0.0/dreams",
  FAVORITES: "@dreamcatcher-v1.0.0/favorites",
};

async function storeDreams(value: Array<IDream>) {
  try {
    const dreams = JSON.stringify(value);
    await AsyncStorage.setItem(STORAGE_KEYS.DREAMS, dreams);
  } catch (e) {
    console.log("ERROR: ", e);
  }
}
async function getDreams() {
  try {
    const dreams = await AsyncStorage.getItem(STORAGE_KEYS.DREAMS);
    return dreams != null ? JSON.parse(dreams) : [];
  } catch (e) {
    console.log("ERROR: ", e);
    return [];
  }
}

async function storeFavorites(value: Array<IDream>) {
  try {
    const favorites = JSON.stringify(value);
    await AsyncStorage.setItem(STORAGE_KEYS.FAVORITES, favorites);
  } catch (e) {
    console.log("ERROR: ", e);
  }
}
async function getFavorites() {
  try {
    const jsonValue = await AsyncStorage.getItem(STORAGE_KEYS.FAVORITES);
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    console.log("ERROR: ", e);
    return [];
  }
}

const dreamsService = {
  storeDreams,
  getDreams,
  storeFavorites,
  getFavorites,
};

export default dreamsService;
