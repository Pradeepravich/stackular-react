import { createDeliveryClient } from "@kontent-ai/delivery-sdk";
import { ENVIRONMENT_ID } from "../config";

const client = createDeliveryClient({
  environmentId: ENVIRONMENT_ID,
});

const ContentItemsByType = async (contentTypeName: string) => {
  try {
    const response = await client
      .items<any>()
      .type(contentTypeName)
      .orderByDescending("system.last_modified")
      .toPromise();
    return response.data.items;
  } catch (error) {
    console.error("Error fetching content items:", error);
    throw error;
  }
};

export default ContentItemsByType;
