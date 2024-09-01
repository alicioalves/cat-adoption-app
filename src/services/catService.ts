import api from '@/utils/api';
import { Cat } from '@/types/cat';

export const fetchCats = async (): Promise<Cat[]> => {
  const { data } = await api.get<Cat[]>('/cats');

  return data;
}

export const fetchCatById = async(id: number): Promise<Cat> => {
  const { data }  = await api.get<Cat>(`/cats/${id}`)

  return data;
}

export const createCat = async (catData: Omit<Cat, 'id'>): Promise<Cat> => {
  const { data } = await api.post<Cat>('/cats', catData);

  return data
}

export const updateCat = async (id: number, catData: Partial<Cat>): Promise<Cat> => {
  const { data } = await api.put<Cat>(`/cats/${id}`, catData);

  return data;
}

export const deleteCat = async (id: number): Promise<void> => {
  await api.delete(`/cats/${id}`);
}