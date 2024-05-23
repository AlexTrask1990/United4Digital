import { IFormData } from '../types/definitions';
import { ApiKeys } from './apiConfig';

export const sendMail = async (formData: IFormData): Promise<Response> => {
  try {
    const response = await fetch(ApiKeys.CONTACT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error(`response status: ${response.status}`);
    }
    return response;
  } catch (error) {
    console.error('Send mail Error:', error);
    throw new Error('Failed to fetch.');
  }
};
