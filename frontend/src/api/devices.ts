import axios from 'axios';
import type { Device } from '../types/devices';

const API_URL = 'http://10.0.5.2:18000/api';

export async function fetchDevices(): Promise<Device[]> {
  try {
    const response = await axios.get(`${API_URL}/devices`);
    return response.data;
  } catch (error) {
    console.error('Error fetching devices:', error);
    throw new Error(
      error instanceof Error 
        ? error.message 
        : 'An unexpected error occurred while loading devices'
    );
  }
}

export async function fetchDevice(id: string): Promise<Device | undefined> {
  try {
    const response = await axios.get(`${API_URL}/devices/${id}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.status === 404) {
      return undefined;
    }
    console.error('Error fetching device:', error);
    throw new Error(
      error instanceof Error 
        ? error.message 
        : 'An unexpected error occurred while loading device'
    );
  }
}