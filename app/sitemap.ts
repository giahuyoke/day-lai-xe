import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://letungdaotaolaixe.com";

  // Ngày cập nhật cuối cùng
  const lastModified = new Date();

  return [
    // Trang chủ
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "daily",
      priority: 1,
    },
    // Các trang khóa học
    {
      url: `${baseUrl}/khoa-hoc/bang-a1`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/khoa-hoc/bang-a`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/khoa-hoc/bang-b1`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/khoa-hoc/bang-b2`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/khoa-hoc/bang-c`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/khoa-hoc/bo-tuc-tay-lai`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];
}
