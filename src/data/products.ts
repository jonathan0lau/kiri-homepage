export interface PublicProduct {
  product_id: string;
  product_name: string;
  description: string;
  price_amount: number;
  price_currency: string;
  cover_url: string;
  preview_images: string[];
  content_count_label: string;
  file_size_label: string;
  discord_url: string;
  status: "SALE" | "COMING_SOON" | "STOP";
}

export const publicProducts: PublicProduct[] = [
  {
    product_id: "KIRI-2026-08",
    product_name: "KIRI 2026年8月写真集",
    description:
      "Kiri Universe 的示例公开商品数据。网站只展示封面、预览和购买入口，实际购买与交付在 Discord 内完成。",
    price_amount: 2000,
    price_currency: "JPY",
    cover_url: "/images/gallery-1.jpg",
    preview_images: [
      "/images/gallery-1.jpg",
      "/images/gallery-2.jpg",
      "/images/gallery-3.jpg",
      "/images/gallery-4.jpg",
      "/images/gallery-5.jpg",
    ],
    content_count_label: "写真120张 / 视频2段",
    file_size_label: "1.8GB",
    discord_url: "https://discord.gg/",
    status: "SALE",
  },
];

export function getPublicProduct(productId: string) {
  return publicProducts.find((product) => product.product_id === productId);
}
