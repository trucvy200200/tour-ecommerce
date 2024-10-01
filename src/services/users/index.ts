import API from "@/configs/api/repository-api"

export const getUserByIdService = (id: string): Promise<any> => {
  return API.get(`/get-user-by-id`, { id }) as any
}

export const updateProfileService = (payload: any): Promise<any> => {
  return API.patch(`/update-user-by-id`, { body: { ...payload } }) as any
}

export const uploadAvatarService = (payload: any): Promise<any> => {
  return API.patch(`/upload-avatar`, { body: payload }) as any
}
