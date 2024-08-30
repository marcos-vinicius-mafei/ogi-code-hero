export interface MarvelApiResponse<T extends MarvelCharacter | MarvelComic> {
	code: number;
	status: string;
	copyright: string;
	attributionText: string;
	attributionHTML: string;
	etag: string;
	data: ResponseData<T>;
}

export interface ResponseData<T extends MarvelCharacter | MarvelComic> {
	offset: number;
	limit: number;
	total: number;
	count: number;
	results?: T[];
}

export interface MarvelCharacter {
	id: number;
	name: string;
	description: string;
	modified: string;
	thumbnail: Image;
	resourceURI: string;
	comics: ComicList;
	series: SeriesList;
	stories: StoryList;
	events: EventList;
	urls?: UrlType[] | null;
}

export interface Image {
	path: string;
	extension: string;
}

export interface ComicList {
	available: number;
	collectionURI: string;
	items?: ComicSummary[] | null;
	returned: number;
}

export interface ComicSummary {
	resourceURI: string;
	name: string;
}

export interface StoryList {
	available: number;
	collectionURI: string;
	items?: StorySummary[];
	returned: number;
}

export interface StorySummary {
	resourceURI: string;
	name: string;
	type: string;
}

export interface SeriesList {
	available: number;
	collectionURI: string;
	items?: SeriesSummary[] | null;
	returned: number;
}

export interface SeriesSummary {
	resourceURI: string;
	name: string;
}

export interface EventList {
	available: number;
	collectionURI: string;
	items?: EventSummary[] | null;
	returned: number;
}

export interface EventSummary {
	resourceURI: string;
	name: string;
}

export interface UrlType {
	type: string;
	url: string;
}

export interface MarvelComic {
	id: number;
	digitalId: number;
	title: string;
	issueNumber: number;
	variantDescription: string;
	description: string;
	modified: string;
	isbn: string;
	upc: string;
	diamondCode: string;
	ean: string;
	issn: string;
	format: string;
	pageCount: number;
	textObjects: TextObject[];
	resourceURI: string;
	urls: UrlType[];
	series: SeriesSummary;
	variants: ComicSummary[];
	collections: ComicSummary[];
	collectedIssues: ComicSummary[];

	thumbnail: Image;
	images: Image[];

	stories: StoryList;
	events: EventList;
}

export interface TextObject {
	type: string;
	language: string;
	text: string;
}
