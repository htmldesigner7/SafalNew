import { withBasePath } from "@/utils/withBasePath";

type ImageLoaderProps = {
  src: string;
  width: number;
  quality?: number;
};

export default function imageLoader({ src }: ImageLoaderProps): string {
  if (src.startsWith("http://") || src.startsWith("https://")) return src;
  let path = src.startsWith("/") ? src : `/${src}`;
  path = path.replace(/^\/images\/homepage\//i, "/images/Homepage/");
  return withBasePath(path);
}
