export interface Car {
    id: number;
    mark: string;
    model: string;
    year: number;
    color: string;
    volume: string;
    engine: string;
    horsepower: number;
    drive: string;
    doors: number;
    statement: string;
    cost: number;
    milage: number;
    rate: string;
    country: string;
    checkpoint: string;
    body: string;
    description: string;
    image: string[];
    liked: number;
    liked_user: string[];
    authoremail: string;
    seen: number;
    createdAt: string;
    updatedAt: string;
}

export interface CarBrand {
    id: number;
    mark_name: string;
    image: string;
    createdAt: string;
    updatedAt: string;
}

export interface New {
    id: number;
    title: string;
    content: string;
    vehicle: boolean;
    author: string;
    image: string;
    created_at: string;
    updated_at: string;
}

