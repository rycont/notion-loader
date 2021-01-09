export interface TableInfo {
    collectionId: string;
    viewId: string;
}

export interface Unit {
    text: string;
    type: BlockType;
    properties: {
        [key: string]: string;
    } | undefined;
}

export enum BlockType {
    text = "text",
    image = "image",
    header = "header",
    sub_header = "sub_header",
    sub_sub_header = "sub_sub_header",
    quote = "quote",
    numbered_list = "numbered_list",
    page = "page"
}

export interface NotionBlock {
    role: string;
    value: {
        id: string;
        type: BlockType;
        created_time: number;
        last_edited_time: number;
        parent_id: string;
        parent_table: string;
        collection_id: string;
        view_ids: string[];
        properties?: {
            title?: [string, [string[]] | undefined][];
            source?: [string[]];
            caption?: [string[]];
            "s3#F"?: string[][];
        }
    }
}
