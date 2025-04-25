// useCategories.ts
import { useState, useEffect } from 'react';
import { createDeliveryClient } from "@kontent-ai/delivery-sdk";
import { ENVIRONMENT_ID } from "../config";

export const client = createDeliveryClient({
  environmentId: ENVIRONMENT_ID,
});

const useCategoryApi = (categoryName: string) => {
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await client.taxonomy(categoryName).toPromise();
        // const fetchedCategories = response.data.taxonomy.terms.map((term: any) => term.name);
        const fetchedCategories = response.data.taxonomy.terms;
        setCategories(fetchedCategories);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, [categoryName]);

  return { categories, loading, error };
};

export default useCategoryApi;
