type MarketplacePromptOptions = {
    title: string;
    category: string;
  };
  
  export function buildMarketplaceImagePrompt({
    title,
    category,
  }: MarketplacePromptOptions) {
    return `
  Edit this product photo for a marketplace listing.
  
  Product title: ${title}
  Category: ${category}
  
  Preserve the original product accurately.
  Do not change the product shape, color, logo, screen, text, or important details.
  Replace the background with a clean professional studio background.
  Improve lighting, shadows, and composition.
  Keep the image realistic and trustworthy.
  Make it suitable for a Facebook Marketplace-style listing.
  Do not add extra products or unrelated objects.
  `.trim();
  }