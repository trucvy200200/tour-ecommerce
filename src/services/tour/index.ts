import API from "@/configs/api/repository-api"

export const getTourByIdService = (tourId: string): Promise<any> => {
  return API.get(`/get-tour-by-id/`, { tourId }) as any
}

export const getToursService = (params?: any): Promise<any> => {
  return API.get(`/get-tour-by-number/`, { ...params }) as any
}
