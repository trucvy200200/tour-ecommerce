import { getUserByIdService, updateProfileService, uploadAvatarService } from "@/services/users"
import { State } from "./index"
import { BaseAction } from ".."

type Actions = BaseAction<State>

export const getUserById = (tourId: string) => {
  return async (actions: Actions) => {
    try {
      const res = await getUserByIdService(tourId)
      actions.setState({
        ...actions.getState(),
        user: res?.userInfo
      })
    } catch (error: any) {
      actions.setState({
        ...actions.getState(),
        user: {}
      })
    }
  }
}

export const updateProfile = (data: any) => {
  return async (actions: Actions) => {
    try {
      const res = await updateProfileService(data)
      actions.setState({
        ...actions.getState(),
        user: res?.userInfo
      })
    } catch (error: any) {
      actions.setState({
        ...actions.getState(),
        user: {}
      })
    }
  }
}

export const uploadAvatar = (file: any, id: string) => async () => {
  if (!file || typeof file === "string") return file
  const formData = new FormData()
  formData.append("id", id)
  formData.append("image", file)
  console.log(formData.get("id"))

  return await uploadAvatarService(formData)
}
