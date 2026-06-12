enum Sector {
    "TI",
    "RH",
    "PRODUCAO",
    "LOGISTICA"
}

enum Priority {
    "BAIXA",
    "MEDIA",
    "ALTA"
}

enum Status {
    "ABERTO",
    "EM_ANDAMENTO",
    "FINALIZADO"
}

export interface TicketDTO {
    id: number,
    title: string,
    description: string,
    sector: Sector,
    priority: string,
    status: string,
    createdAt: string
}