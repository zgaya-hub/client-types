import { MediaCountriesEnum, MediaLanguagiesEnum, MediaGenriesEnum, MediaStatusEnum, Series, AdditionalInfo } from "..";

export interface GetManagerSeriesForTableOutput {
  seriesList: GetManagerTableOutputSeriesList[];

  totalRecords: number;
}

export interface GetManagerTableOutputSeriesList {
  ID: string;
  status: MediaStatusEnum;
  title: string;
  plotSummary: string;
  releaseDate: number;
  backdropImageUrl: string;
  likeCount: number;
  avarageRating: number;
  uploadDate: number;
}

export interface GetManagerSeriesWithImageOutput {
  title: string;
  plotSummary: string;
  ID: string;
  backdropImageUrl: string;
}

export interface GetSeriesDetailsByIdOutput {
  ID: string;
  originCountry: MediaCountriesEnum;
  originalLanguage: MediaLanguagiesEnum;
  genre: MediaGenriesEnum;
  status: MediaStatusEnum;
  title: string;
  plotSummary: string;
  releaseDate: number;
  backdropImageUrl: string;
  uploadDate: number;
  isFree: boolean;
}

export interface GetSeriesDataForUpdateFormOutput {
  title: string;
  plotSummary: string;
  releaseDate: number;
  originCountry: MediaCountriesEnum;
  originalLanguage: MediaLanguagiesEnum;
  genre: MediaGenriesEnum;
  status: MediaStatusEnum;
  backdropImageUrl: string;
}
