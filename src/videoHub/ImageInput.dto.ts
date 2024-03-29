import { ImageMimeType } from "./types";
import { ImageVariantEnum } from "./Image.enum";

export interface CreateImageInput {
  Base64: string;

  Mime: ImageMimeType;

  Variant?: ImageVariantEnum;
}

export interface UpdateImageInput {
  Url?: string;

  Variant?: ImageVariantEnum;
}

export interface ChangeImageInput {
  Base64: string;

  Mime: ImageMimeType;
}

export interface ImageMediaIdParams {
  MediaId: string;
}

export interface CreateImageByUrlInput {
  Url?: string;
  Variant?: ImageVariantEnum;
}
