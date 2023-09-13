export interface IArtWorkListDTO {
    data: IArtworkDataDTO[],
    config: IArtWorkConfig,
    pagination: IArtWorkPagination,
    info: IArtWorkInfo,
}

export interface IArtWorkDTO {
    data: IArtworkDataDTO,
    config: IArtWorkConfig,
    info: IArtWorkInfo,
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

export interface IArtWorkConfig {
    iiif_url: string,
    website_url: string
}

export interface IArtWorkInfo {
    licence_text: string,
    licence_links: string,
    version: string,
}