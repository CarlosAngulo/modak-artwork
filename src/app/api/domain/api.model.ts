export interface IResultsDTO {
    data: IArtworkDataDTO[] | IProductDataDTO[],
    config: IResultsConfig,
    pagination: IArtWorkPagination,
    info: IResultsInfo,
}

export interface IArtWorkDTO {
    data: IArtworkDataDTO,
    config: IResultsConfig,
    info: IResultsInfo,
}

export interface IProductDTO {
    data: IProductDataDTO,
    config: IResultsConfig,
    info: IResultsInfo,
}

export interface IArtWorkPagination {
    total: number,
    limit: number,
    offset: number,
    total_pages: number,
    current_page: number,
    next_url?: string,
    prev_url?: string
}

export interface IArtworkDataDTO {
    artist_display: string,
    date_display: string,
    description?: string,
    id: number,
    image_id?: string,
    title: string,
}

export interface IProductDataDTO {
    id: number,
    title: string,
    image_url: string,
    description: string,
    price_display: string,
    artist_ids: number[],
    artwork_ids: number[],
}

export interface IResultsConfig {
    iiif_url: string,
    website_url: string
}

export interface IResultsInfo {
    licence_text: string,
    licence_links: string,
    version: string,
}