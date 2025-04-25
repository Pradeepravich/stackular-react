import { useState, useEffect } from 'react';
import { createDeliveryClient } from "@kontent-ai/delivery-sdk";
import { ENVIRONMENT_ID } from "../config";

export const client = createDeliveryClient({
  environmentId: ENVIRONMENT_ID,
});

const useContentTypes = (contentTypeName: string) => {
  const [contentItems, setContentItems] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [errorCode, setErrorCode] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // const response = await client.items<any>().type('sample').toPromise();        
        const response = await client.items<any>()
        .type(contentTypeName)
        .orderByDescending('system.last_modified')
        .toPromise();       
        setContentItems(response?.data?.items);        
      } catch (err: any) {
        console.error('Error fetching content items:', err);        
        setError(err as Error);
        setErrorCode(err.errorCode);
        setLoading(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [contentTypeName]);

  return { contentItems, loading, error, errorCode };
};

export default useContentTypes;
