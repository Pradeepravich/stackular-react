import { useState, useEffect } from 'react';
import { createDeliveryClient } from "@kontent-ai/delivery-sdk";
import { ENVIRONMENT_ID } from "../config";

export const client = createDeliveryClient({
  environmentId: ENVIRONMENT_ID,
});

const useContentItemsByCategory = (contentTypeName: string,  categoryField: string, taxonomyCodename: string) => {
  const [contentItemsByCategory, setContentItemsByCategory] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [errorCode, setErrorCode] = useState<number>(0);

  useEffect(() => {
    const fetchContentItemsByCategory = async () => {
      try {
        setLoading(true);
        // const response = await client.items<any>().type('sample').toPromise();        
        const response = await client.items<any>()
        .type(contentTypeName)
        .equalsFilter(categoryField, taxonomyCodename)
        // .containsFilter('service_category', [categoryCodename]) // Dynamic filtering by category
        .orderByDescending('system.last_modified')
        .toPromise();       
        setContentItemsByCategory(response?.data?.items || []);        
      } catch (err: any) {
        console.error('Error fetching content items:', err);        
        setError(err as Error);
        setErrorCode(err.errorCode);
        setLoading(true);
      } finally {
        setLoading(false);
      }
    };

    fetchContentItemsByCategory();
  }, [categoryField, contentTypeName, taxonomyCodename]);

  return { contentItemsByCategory, loading, error, errorCode };
};

export default useContentItemsByCategory;
